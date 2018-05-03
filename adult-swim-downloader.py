import json
import shutil

from clint.textui import progress
import requests

def fetchPlaylist(videoID):
  r = requests.get('http://www.adultswim.com/videos/api/v2/videos/{}?fields=title,stream'.format(videoID))
  manifest = json.loads(r.text)

  return manifest['data']['stream']['assets'][8]['url']

def fetchStreams(videoID):
  playlist = fetchPlaylist(videoID)
  
  r = requests.get(playlist)
  streams = r.text.strip().split('\n')

  print('Available streams:')

  for stream in streams:
    if stream.endswith('m3u8'):
      print(stream)
  
  quality = input('Please choose a stream # => ')
  episodeURL = playlist.replace('stream_full', 'stream_{}'.format(quality))

  fetchTSFiles(episodeURL)

def fetchTSFiles(episodeURL):
  r = requests.get(episodeURL)
  segments = r.text.strip().split('\n')

  files = []

  for segment in segments:
    if segment.endswith('.ts'):
      files.append(segment)

  for file in files:
    print('Downloading {}'.format(file))
    # url is hardcoded, can't be bothered fixing since this is a reference
    url = 'https://amd.cdn.turner.com/adultswim/episodes/{episode_details_here}hls/{}'.format(file)
    r = requests.get(url, stream=True)

    with open(file, 'wb') as episode:
      length = int(r.headers.get('content-length'))
      for chunk in progress.bar(r.iter_content(chunk_size=1024), expected_size=(length/1024) + 1):
        if chunk:
          episode.write(chunk)
          episode.flush()

  print('Merging files')

  with open('fullep.ts', 'wb') as master:
    for file in files:
      with open(file, 'rb') as dledSegment:
        shutil.copyfileobj(dledSegment, master)



fetchStreams('h5sRTeClSXa_lAkJlwUROA')
