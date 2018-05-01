var request = require('superagent')
var greetingTemplate = require('./views/greeting.js')

var endpoint = 'https://api.wheretheiss.at/v1/satellites'

request.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're interested
  console.log(data.body)

  var content = greetingTemplate({name: 'HyperScript'})
  document.getElementsByTagName('main')[0].appendChild(content)
})
