'use strict';

var express = require('express');
var app = express();

app.set("port", process.env.PORT || 4000);

app.get('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is GET method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/:id', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is GET method with id=" + req.params.id + "." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is POST method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.put('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is PUT method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.delete('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is DELETE method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(app.get("port"), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)

})
