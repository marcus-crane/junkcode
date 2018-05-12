from urllib import parse
import requests

def encode_address(address):
    return parse.urlencode({'q': address})

def encode_api_key(key):
    return parse.urlencode({'public_api_key': key})

def query_address(address):
    query = encode_address(address)
    headers = {'Host': 'address.nzpost.co.nz',
               'Referer': 'https://nzpost.co.nz'}
    key = encode_api_key("245ae700-0800-4344-82dc-46bce23d09e0")
    url = "https://address.nzpost.co.nz/api/suggest.json?{0}&{1}"
    endpoint = url.format(query, key)
    r = requests.get(endpoint, headers=headers)
    return r.json()

def show_postcodes(address):
    data = query_address(address)
    results = data['addresses']
    for entry in results:
        print(f"* {entry['FullAddress']}")

address = input("Please enter an address: ")
show_postcodes(address)
