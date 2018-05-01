const test = require('blue-tape')
const login = require('../lib/tvdb/login')
const searchSeriesName = require('../lib/tvdb/searchSeriesName')
const searchSeries = require('../lib/tvdb/searchSeries')

test('Chaining together login and searchSeriesName manually', ((t) => {
  return login()
    .then((token) => {
      searchSeriesName(token, 'Mr. Robot')
        .then((res) => {
          t.equal(res[0].seriesName, 'Mr. Robot', 'Successfully retrieve a correct search!')
        })
    })
}))

test('Using the abstracted searchSeries function', ((t) => {
  return searchSeries('Mr. Robot')
    .then((res) => {
      t.equal(res[0].seriesName, 'Mr. Robot', 'Retrieved the right result!')
    })
}))
