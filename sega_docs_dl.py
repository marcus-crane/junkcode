from bs4 import BeautifulSoup
import requests

r = requests.get('http://antime.kapsi.fi/sega/docs.html')
soup = BeautifulSoup(r.text, 'html.parser')
links = soup.find_all('a')
files = []

def filter_crap(link):
  valid_exts = ['pdf']
  if link.get('href').split('.')[-1] in valid_exts:
    return True

def download_file(file):
  r = requests.get(file['link'])
  data = r.content
  path = '/Users/marcus/Desktop/Sega/{}'.format(file['filename'])
  with open(path, 'wb') as f:
    f.write(data)
    print('Saved {}'.format(file['filename']))

for link in links:
  if filter_crap(link):
    extension = link.get('href').split('.')[-1]
    name = link.get_text().replace('/', ' ')
    file = 'http://antime.kapsi.fi/sega/' + link.get('href')
    filename = '{}.{}'.format(name, extension)
    files.append({ 'link': file, 'filename': filename })

for file in files:
  download_file(file)
