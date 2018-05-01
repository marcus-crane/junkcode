const inquirer = require('inquirer')

const searchMovies = require('./lib/omdb/searchMovies')
const moviePrompt = require('./lib/inquirer/moviePrompt')
const getMovieClarification = require('./lib/omdb/getMovieClarification')

moviePrompt()
  .then((answer) => {
    return searchMovies(answer.title)
  })
  .then((res) => {
    getMovieClarification(res)
  })
