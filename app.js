


var http = require('http');   // is the  the dependency need to insta

var express = require('express')

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});



  res.end('Hello World!grfgfgfg');

console.log("server started running on port 4000")

}).listen(4000);