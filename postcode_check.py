from urllib import parse

import requests

def encode(querystring):
    return parse.urlencode(querystring)

def query_address(address):
    query = encode({'q': address})
    key = encode({"public_api_key": "245ae700-0800-4344-82dc-46bce23d09e0"})
    headers = {'Referer': 'https://nzpost.co.nz'}
    url = f"https://address.nzpost.co.nz/api/suggest.json?{query}&{key}"

    r = requests.get(url, headers=headers)
    return r.json()

def show_postcodes(address):
    data = query_address(address)
    for entry in data['addresses']:
        print(f" * {entry['FullAddress']}")

address = input("Please enter an address: ")
show_postcodes(address)
