import csv
import os

import google.oauth2.credentials

from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from google_auth_oauthlib.flow import InstalledAppFlow

CLIENT_SECRETS_FILE = "client_secret.json"

SCOPES = ['https://www.googleapis.com/auth/youtube.force-ssl']
API_SERVICE_NAME = 'youtube'
API_VERSION = 'v3'

def get_authenticated_service():
    flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS_FILE, SCOPES)
    credentials = flow.run_console()
    return build(API_SERVICE_NAME, API_VERSION, credentials=credentials)

def fetch_channel(service, **kwargs):
	results = service.channels().list(**kwargs).execute()
	print('Logged in as {}'.format(results['items'][0]['snippet']['title']))
	return results['items'][0]['contentDetails']['relatedPlaylists']['favorites']

def fetch_playlist(service, playlistId, pageToken):
	results = service.playlistItems().list(part='snippet', pageToken=pageToken, playlistId=playlistId, maxResults=50).execute()
	with open('faves.csv', 'w', newline='') as favesfile:
		faveswriter = csv.writer(favesfile, delimiter=',')
		faveswriter.writerow(['id', 'title', 'description', 'thumbnail', 'publishedAt'])
		for video in results['items']:
			faveswriter.writerow([video['id'], video['snippet']['title'], video['snippet']['description'], video['snippet']['thumbnails']['default']['url'], video['snippet']['publishedAt']])
	print('Bye bye')

if __name__ == '__main__':
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    service = get_authenticated_service()
    playlistId = fetch_channel(service,
            part='id,snippet,contentDetails',
            mine=True)
    fetch_playlist(service, playlistId=playlistId, pageToken=None)
