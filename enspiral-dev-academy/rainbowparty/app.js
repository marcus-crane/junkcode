var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//---------------------Ignore above here-------------------//

var entries = {
 colour: [
  {id: 1, colour: '#f1c40f'},
  {id: 2, colour: '#e74c3c'},
  {id: 3, colour: '#16a085'},
  {id: 4, colour: '#34495e'},
  {id: 5, colour: '#bdc3c7'},
  {id: 6, colour: '#2ecc71'},
 ]
}

// 94c1ef
// c941fe

app.get('/', function(req, res) {
 res.redirect('/colours')
})

app.get('/colours', function(req, res) {
 res.render('rainbowCentral', entries)
})

app.get('/colours/new', function(req, res) {
 res.render('addToTheRainbow')
})

app.post('/colours', function(req,res) {
  var db = entries.colour
  db.push({id: db.length + 1, colour: req.body.colour})
  console.log(db)
  res.render('rainbowCentral', entries)
})

module.exports = app;
