import sys

import requests

url = "https://api.trakt.tv/users/USERNAME/watching"
headers = {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': 'TRAKT_API_KEY',
        'User-Agent': 'A User Agent <user@example.com>'
}
r = requests.get(url, headers=headers)
if r.status_code == 204:
    sys.exit()
data = r.json()

if data['type'] == 'episode':
    number = data['episode']['number']
    season = data['episode']['season']
    title = data['episode']['title']
    show = data['show']['title']

    print('{:02d}x{:02d} {} - {}'.format(season, number, title, show))
