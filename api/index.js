const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')
const app = express()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true} )

app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/auth', auth)

module.exports = app