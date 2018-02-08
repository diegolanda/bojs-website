var express = require('express');
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use('/', express.static(__dirname));
app.use('/static', express.static(__dirname + '/static'));

http.listen(80, function(){
  console.log('Boliviajs Website: listening on *:80');
});