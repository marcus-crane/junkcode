"""
A quick script for updating Cloudflare DNS records

In particular, I'm using this to keep a domain name in sync with my home IP address.
Normally I could use a static IP but I'd have to pay for that and this does the
job just as well.

I can also get Pushover alerts to my phone whenever my address updates.

Requirements from PyPi:

python-pushover (+ account from https://pushover.net)
requests
cloudflare (+ account from https://cloudflare.com)
"""

import CloudFlare
from pushover import Client
import requests

ZONE_ID = ''
RECORD_ID = ''
PUSHOVER_USER = ''
PUSHOVER_API = ''
RECORD = {'name': 'example.net', 'type': 'A'}
cf = CloudFlare.CloudFlare(email='user@example.com', token='abc123')
client = Client(PUSHOVER_USER, api_token=PUSHOVER_API)

def get_current_ip():
    r = requests.get('https://api.ipify.org?format=json')
    data = r.json()
    return data['ip']

def update_record():
    try:
        curr_ip = get_current_ip()
        RECORD['content'] = curr_ip
        cf.zones.dns_records.put(ZONE_ID, RECORD_ID, data=RECORD)
        client.send_message(f'Your IP address has recently changed to {curr_ip}', title='Updated DNS record')
    except Exception as ex:
        client.send_message(ex, title='Failed to update DNS record')

update_record()
