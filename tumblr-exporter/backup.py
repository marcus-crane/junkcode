# -*- coding: utf-8 -*-

import configparser
import os
import sys

from html2text import html2text
import requests

def load_config():
    """
    Import user configuration
    """
    try:
        config = configparser.ConfigParser()
        config.read('config.ini')
        return config['tumblr']
    except Exception as error:
        raise ValueError('No config.ini found', error)

def fetch_data(domain, key, offset=0):
    """
    Fetch all photo posts
    """
    headers = {'User-Agent': 'Tumblr Backer-Upper <marcus@thingsima.de>' }
    url = 'https://api.tumblr.com/v2/blog/{}/posts/photo?api_key={}&offset={}'.format(domain, key, offset)
    try:
        r = requests.get(url, headers=headers)
        return r.json()
    except Exception as error:
        raise ValueError('Data could not be fetched. Are your API key and domain name correct?', error)

def backup_post(post):
    """
    Backup a post, saving its content and image
    """
    print('\n{}'  .format(post['slug']))
    md = html2text(post['caption'])
    save_text(post)
    save_image(post['photos'][0]['original_size']['url'], post['slug'])
    

def save_image(url, slug):
    try:
        r = requests.get(url)
        image = r.content
        filename = 'backup/{}.jpg'.format(slug)
        with open(filename, 'wb') as file:
            file.write(image)
        print('    ✔ Saved image')
    except Exception as error:
        raise ValueError('Failed to save image. Is it a valid URL?', error)

def save_text(post):
    filename = 'backup/{}.md'.format(post['slug'])
    content = html2text(post['caption'])
    content = ('---\n'
            + 'First published {}\n'.format(post['date'])
            + 'Tags: {}\n'.format(', '.join(post['tags']))
            + '---\n\n' + content)
    with open(filename, 'w') as file:
        file.write(content)
    print('    ✔ Saved text')

def fetch_posts(cfg, offset = 0):
    data = fetch_data(cfg['domain'], cfg['key'], offset)
    posts = data['response']['blog']['posts']
    for post in data['response']['posts']:
        backup_post(post)

    if offset < posts:
        fetch_posts(cfg, offset + 20)

if __name__ == "__main__":
    cfg = load_config()
    fetch_posts(cfg)
