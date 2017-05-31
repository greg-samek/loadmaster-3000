var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var html = fs.readFileSync('index.html', 'utf8');
var shell = require('shelljs');
var DataStore = require("./DataStore");

function handler (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html, 'utf8'));
  res.end(html);
}

function getLoad () {
  var average,
    store,
    command = "ps -A -o %cpu | awk '{s+=$1} END {print s }'",
    load = shell.exec(command, {silent:true}).stdout;

  DataStore.addValue(load);
  average = DataStore.getAverage();
  store = DataStore.storeSize10.toString();
  io.sockets.send(store);
}

setInterval(getLoad, 1000);

app.listen(8080);
