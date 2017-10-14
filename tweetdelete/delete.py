import argparse
import configparser
import csv
import twitter

ap = argparse.ArgumentParser()
ap.add_argument('-w', '--word', required=True, help='What word do you want to search for?')
args = vars(ap.parse_args())

def cfg(option):
  config = configparser.ConfigParser()
  config.read('config.ini')
  return config['account'][option]

api = twitter.Api(consumer_key=cfg('consumer_key'),
                  consumer_secret=cfg('consumer_secret'),
                  access_token_key=cfg('access_token_key'),
                  access_token_secret=cfg('access_token_secret'),
                  sleep_on_rate_limit=True)

def fetchTweets(word):
  with open('tweets.csv') as archive:
    tweets = csv.DictReader(archive)

    print('Press Y to delete a tweet. Press Q to quit at any time. Press any other button to skip the tweet.')

    for index, tweet in enumerate(tweets):
      if word in tweet['text']:
        print(tweet['tweet_id'], tweet['text'])
        delete = input('Delete? (y/n) => ')

        if delete == 'y':
          api.DestroyStatus(tweet['tweet_id'])
          print('Deleted {}'.format(tweet['tweet_id']))
        elif delete == 'q':
          break

fetchTweets(args['word'])