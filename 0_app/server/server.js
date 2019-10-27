const http = require('http')
const express = require('express')
const app = express()

var port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Running on ' + port)
})