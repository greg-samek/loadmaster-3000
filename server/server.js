var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var html = fs.readFileSync('index.html', 'utf8');
var js = fs.readFileSync('app.js', 'utf8');
var css = fs.readFileSync('styles.css', 'utf8');
var shell = require('shelljs');
var DataStore = require("./DataStore");
var Message = require("./Message");
var json = {
  "messages": [],
  "store": []
}

function handler (req, res) {
  if (req.url === '/app.js') {
    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Content-Length', Buffer.byteLength(js, 'utf8'));
    res.end(js);
  } else if (req.url === '/styles.css') {
    res.setHeader('Content-Type', 'text/css');
    res.setHeader('Content-Length', Buffer.byteLength(css, 'utf8'));
    res.end(css);
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html, 'utf8'));
    res.end(html);
  }
}

function getLoad () {
  var command = "ps -A -o %cpu | awk '{s+=$1} END {print s }'",
    load = shell.exec(command, {silent:true}).stdout,
    store = DataStore.getStore();

  load = Math.round(load) / 100; // 0.01 .. 9.99
  DataStore.addValue(load);
  json.store = store;
  if ( store.length >= 12 ){ // 2 minutes have passed.
    json.messages = Message.getMessages(DataStore.getAverage());
  }
  io.sockets.send(json);
}

setInterval(getLoad, 1000);

app.listen(8080);
