# das-tool

The excellent [Destroy All Software](https://destroyallsoftware.com) screencasts are free to celebrate their 7th birthday! I don't want to miss out on all of that great content so I've cobbled together a script to pull down all of their videos.

# Prerequites

You'll want to have a copy of [Python](https://python.org) 3 installed. If you've got that running, you can grab the required dependencies like so:

```python
pip install -r requirements.txt
```

Besides the standard library, only [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) and [Requests](http://docs.python-requests.org/en/master/) are used.

# Options

This is really just a throwaway script so the only option is video quality. If you change the `1080p` string on line 7 to read `4k`, it'll download 4k versions. I don't have a 4K monitor so it doesn't do me much good.

# Video Size

On average, the videos seem to hover around 80 - 150MB each so you'll definitely want to leave this running while you do some errands or something.

# Where does it all go?

The videos are all saved into a folder titled `das` in the same folder as this script

Enjoy!