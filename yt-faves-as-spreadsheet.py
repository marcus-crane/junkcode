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

def save_playlist(videos):
	with open('favourites.csv', 'w', newline='') as favourites:
		faveswriter = csv.writer(favourites, delimiter=',')
		faveswriter.writerow(['id', 'title', 'description', 'published_date'])
		for video in videos:
			faveswriter.writerow([video['id'], video['title'], video['description'], video['date']])
	print('Saved {} videos to favourites.csv'.format(len(videos)))

def pull_favourites(service, playlistId):
	favourites = []
	pageToken = None
	results = fetch_playlist(service, playlistId, pageToken)
	
	while len(favourites) != results['pageInfo']['totalResults']:
		videos = fetch_playlist(service, playlistId=playlistId, pageToken=pageToken)
		for video in videos['items']:
			favourites.append({ 'id': video['snippet']['resourceId']['videoId'], 'title': video['snippet']['title'], 'description': video['snippet']['description'], 'date': video['snippet']['publishedAt'] })

		if 'nextPageToken' in videos:
			pageToken = videos['nextPageToken']
			print('Page Token is now {}'.format(pageToken))
	save_playlist(favourites)


def fetch_playlist(service, playlistId, pageToken):
	return service.playlistItems().list(part='snippet', pageToken=pageToken, playlistId=playlistId, maxResults=50).execute()

if __name__ == '__main__':
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    service = get_authenticated_service()
    playlistId = fetch_channel(service,
            part='id,snippet,contentDetails',
            mine=True)
    pull_favourites(service, playlistId=playlistId)
