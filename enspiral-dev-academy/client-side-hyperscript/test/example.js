var test = require('tape')
var cheerio = require('cheerio')

var exampeTemplateFunction = require('../views/example.js')

test('test example template function', function (t) {
  var renderedTemplate = exampeTemplateFunction({name: 'Benedict'})
  var $ = cheerio.load(renderedTemplate.outerHTML)

  t.equal($('h1').text(), 'Welcome to Benedict!')

  t.end()
})
