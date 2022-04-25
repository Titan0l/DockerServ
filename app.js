const express = require('express')
const cors = require('cors')
const request = require('./routes/request')

const app = express()
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: '*',
  })
)
app.use('/', request)
module.exports = app
