var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var html = fs.readFileSync('index.html', 'utf8');
var shell = require('shelljs');

function handler (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html, 'utf8'));
  res.end(html);
}

function getLoad () {
  var command = "ps -A -o %cpu | awk '{s+=$1} END {print s }'";
  var load = shell.exec(command, {silent:true}).stdout;
  // io.sockets.send(load);
}

setInterval(getLoad, 10000);

app.listen(8080);
