/// codigo propio
var fs= require('fs');
var salida="";

salida= fs.readFileSync('index.html').toString();


////Original de web.js salvo salida

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(salida);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
