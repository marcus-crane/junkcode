# tumblr exporter

I'm currently doing a "data spring cleaning" and decided to delete my unused Tumblr accounts.

One of them served as a mirror site for some game reviews I did a few years back and when I lost the database for the original Wordpress site, luckily the Tumblr remaining. I didn't want to just lose all of that writing though but manually saving everything would be a pain.

What'dya know, Tumblr has a JSON api and it's a good excuse to do some Pytohn bits and pieces!

This lil' program saves all photo posts, storing the first image (I only used one per post) and converting the HTML captions into markdown, complete with tags and publish date as a meta heading of sorts.

Enjoy! It shouldn't take much to adapt it to text or to save more images for example
