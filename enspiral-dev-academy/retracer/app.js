var simpledb = require('mongoose-simpledb')
var env = require('dotenv')
var express = require('express')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var app = express()

var path = require('path')
env.load()
var connectionPath = 'mongodb://' + process.env.USERNAME + ':' + process.env.PASSWORD + '@jello.modulusmongo.net:27017/Huw7yvaj'

simpledb.init(connectionPath, function (err, db) {

  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'pug')

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(express.static(path.join(__dirname, 'public')))

  app.get('/', function(req, res, next) {
    db.Location.find(function(err, locations) {
      res.render('index', {title: 'Retrace', json: locations })
    })

  })

  app.post('/', function(req, res, next) {
    var newLocation = new db.Location({
      placeName: req.body.placeName,
      timeVisited: Date.now(),
      latitude: req.body.latitude,
      longitude: req.body.longitude
    })

    newLocation.save()
    console.log(newLocation)
    res.redirect('/')
  })

  app.get('/form', function(req, res, next) {
    res.render('form')
  })
})

app.listen(process.env.PORT)
module.exports = app
