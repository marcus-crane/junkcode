var xhr = require('xhr')
var greeting = require('./views/greeting.jade')
var apiOutput = require('./views/apiOutput.jade')

// var endpoint = 'https://api.wheretheiss.at/v1/satellites'
var endpoint = 'https://dogapi-67521.onmodulus.net/dogs/4'

function getDogs() {
  xhr.get(endpoint, function(err, data) {
    if (err) {
      console.log(err)
    }

    console.log(data.body)

    var target = document.getElementsByTagName('footer')[0]
    target.innerHTML = greeting({title: 'pug is online and logged on', para: 'love pug', logs: 'love to use jade wow'})
  })
}

function getCats() {
  xhr.get(endpoint, function(err, data) {
    if (err) {
      console.log(err)
    }

    console.log(data.body)

    var target = document.getElementsByTagName('footer')[0]
    target.innerHTML = greeting({title: 'pug used to be called jade', para: 'long live jade', logs: 'jade is deprecated sad face'})
  })
}

var button = document.getElementById('loveButtons')
button.addEventListener('click', getDogs)

var button2 = document.getElementById('hateButtons')
button2.addEventListener('click', getCats)
