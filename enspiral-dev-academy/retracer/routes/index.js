var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', {title: 'Retrace', words: 'Online and logged on'})
})

router.post('/', function(req, res, next) {
  console.log(req.body)
  res.sendStatus(200)
})

router.get('/form', function(req, res, next) {
  res.render('form')
})

module.exports = router
