const searchSeries = require('./lib/tvdb/searchSeries')
const getSeriesClarification = require('./lib/inquirer/getSeriesClarification')
const seriesPrompt = require('./lib/inquirer/seriesPrompt')
const inquirer = require('inquirer')

seriesPrompt()
  .then((answer) => {
    searchSeries(answer.title)
  .then((res) => {
    getSeriesClarification(res)
  .then((answer) => {
    console.log(`Added ${answer.series} to the database [doesn't actually do that yet]`)
  })
  })
  })
