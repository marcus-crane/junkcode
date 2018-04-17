import re
import sys

import requests

url = ("https://slack.com/api/channels.info?token="
       "USER_TOKEN&channel=CHANNEL_ID")
r = requests.get(url)
data = r.json()

outages = data['channel']['topic']['value']

outageList = re.findall(r'\d+-\d+-\d+-\w+', outages)

print(len(outageList))