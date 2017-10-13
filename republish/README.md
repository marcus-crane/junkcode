# Republish

Created: August 1st 2016
Pushed: August 23rd 2016

The idea for this project came about after seeing that updated packages on NPM were automatically pushed to the top of the newly published queue which was on the front page.

This would create a feedback loop where it would rack up downloads, and presumably people just trying it out randomly, because of the temporary visibility.

I wondered if I could exploit that by having the entire purpose of an NPM module be that running it would increment its version number by 1, log in as a throwaway account and then republish itself continuing on the cycle forever.

I never got it working and I assume someone would have thought of this before hand.
