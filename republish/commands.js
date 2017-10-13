#!/usr/bin/env node
const child = require('child_process')

child.exec('node app && npm version patch && npm publish && echo "Thanks for taking part in this experiment. Goodbye." && rm -R ../republish', function(error, stdout, stderr) {
  console.log('See ya. Thanks for participating!')
})
