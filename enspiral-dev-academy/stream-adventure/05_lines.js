const split = require('split')
const through = require('through2')

let count = 0

process.stdin
    .pipe(split())
    .pipe(through(function (line, _, next) {
      if (count % 2 === 0) {
        console.log(line.toString().toLowerCase())
      } else {
        console.log(line.toString().toUpperCase())
      }
      count++
      next()
    }))
