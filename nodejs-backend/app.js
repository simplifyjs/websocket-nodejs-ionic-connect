const express = require('express');
const app = express();
const WebSocket = require('ws');

const server = require('http').createServer(app);
const port = 8080;

app.get('/', function(req, res, next) {
    return res.send('Hello World!');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
   //  ws.send('something from server');
	ws.on('open', function open() {
		console.log('connected');
		ws.send(Date.now());
	});

 	ws.on('ping', function () {
	   console.log('ping');
  	}); 
 	ws.on('disconnected', function () {
	   console.log('close');
  	}); 

});

server.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log(`listening on port ${port}!`);
});