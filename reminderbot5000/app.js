const express = require('express')
const path = require('path')
const app = express()

// Middleware
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// Routing
const index = require('./routes/index')

// Load environment variables
const env = require('dotenv')
env.load()

// Setting up parser and routes
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Use external routes
app.use('/', index)

module.exports = app