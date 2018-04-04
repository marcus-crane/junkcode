import os
import re

from bs4 import BeautifulSoup
import requests

quality = '1080p'

def heat_soup(url):
    r = requests.get(url)
    return BeautifulSoup(r.text, 'html.parser')

def fetch_video_source(scripts):
    sources = re.search(r'"https\S+"', scripts).group(0)[1:-1]
    if quality == '4k':
        return sources.replace('1080p', '4k')
    return sources

def save_video(url, title):
    print('Downloading {0}'.format(title))
    r = requests.get(url, stream=True)
    filename = '{0}.mp4'.format(title.replace('/', '').replace(':', ''))
    with open('das/' + filename, 'wb') as f:
        for chunk in r.iter_content(chunk_size=1024):
            if chunk:
                f.write(chunk)

def load_casts():
    casts = []
    soup = heat_soup('https://www.destroyallsoftware.com/screencasts/catalog')
    for item in soup.find_all('div', class_='episode'):
        casts.append({
            'url': item.contents[1].get('href'),
            'title': item.find('div', class_='title').get_text()
        })
    return casts

catalogue = load_casts()
os.mkdir('das')
for video in catalogue:
    url = 'https://www.destroyallsoftware.com' + video['url']
    title = video['title']
    scripts = heat_soup(url).find_all('script')[1].get_text()
    source = fetch_video_source(scripts)
    save_video(source, title)

