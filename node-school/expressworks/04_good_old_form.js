const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// req.body starts as an obj
// .str converts it to a string
// .split('') splits up the string by each character
// .reverse() reverses the order of the characters
// .join('') joins the characters back up into a word

app.post('/form', (req, res) => {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
