var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var html = fs.readFileSync('index.html', 'utf8');
var js = fs.readFileSync('app.js', 'utf8');
var shell = require('shelljs');
var DataStore = require("./DataStore");
var json = {
  "average": 0,
  "store": []
}

function handler (req, res) {
  if (req.url === '/app.js') {
    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Content-Length', Buffer.byteLength(js, 'utf8'));
    res.end(js);
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html, 'utf8'));
    res.end(html);
  }
}

function getLoad () {
  var command = "ps -A -o %cpu | awk '{s+=$1} END {print s }'",
    load = shell.exec(command, {silent:true}).stdout;

  load = Math.round(load) / 100; // 0.01 .. 9.99
  DataStore.addValue(load);
  json.average = DataStore.getAverage();
  json.store = DataStore.getStore();
  console.log(json);
  io.sockets.send(json);
}

setInterval(getLoad, 1000);

app.listen(8080);
