import configparser
import requests

def cfg(option):
    config = configparser.ConfigParser()
    config.read('config.ini')
    return config['tumblr'][option]

def fetch(domain, key):
    headers = { 'User-Agent': 'Tumblr Backer-Upper <marcus@thingsima.de>' }
    url = 'https://api.tumblr.com/v2/blog/{}/posts/photo?api_key={}'.format(domain, key)
    r = requests.get(url, headers=headers)
    print(r.json())

domain = cfg('domain')
key = cfg('key')

fetch(domain, key)
