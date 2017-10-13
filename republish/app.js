#!/usr/bin/env node
const suppose = require('suppose')

// Just a small script to log you in with the republish account
// This project wouldn't work otherwise.
// Please don't remove it or edit the password to keep the fun alive!

suppose('npm', ['login'])
  .when('Username: ').respond('republish\n')
  .when('Password: ').respond('republish\n')
  .when('Email: (this IS public) ').respond('republish@thingsima.de\n')
.on('error', function(err) {
  console.log(err.message)
})
.end(function(code) {
  console.log('Logged in and ready to republish')
})
