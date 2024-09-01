'use strict'

var express = require('express')
var app = express()

app.set("port", process.env.PORT || 4000)

app.get('/', function (req, res) {
  console.log('GET request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is GET method." }
  console.log(response)
  res.end(JSON.stringify(response))
})

app.get('/:id', function (req, res) {
  console.log('GET /:id request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is GET method with id=" + req.params.id + "." }
  console.log(response)
  res.end(JSON.stringify(response))
})

app.post('/', function (req, res) {
  console.log('POST request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is POST method." }
  console.log(response)
  res.end(JSON.stringify(response))
})

app.put('/', function (req, res) {
  console.log('PUT request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is PUT method." }
  console.log(response)
  res.end(JSON.stringify(response))
})

app.delete('/', function (req, res) {
  console.log('DELETE request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is DELETE method." }
  console.log(response)
  res.end(JSON.stringify(response))
})

const server = app.listen(app.get("port"), function () {
  const host = server.address().address
  const port = server.address().port

  console.log("Node.js API app running at http://%s:%s", host, port)
})

process.on('SIGINT', () => {
  console.log('Received SIGINT. Closing server...')
  server.close(() => {
    console.log('Server closed. Exiting process...')
    process.exit(0)
  })
})

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Closing server...')
  server.close(() => {
    console.log('Server closed. Exiting process...')
    process.exit(0)
  })
})
