var WebSocketServer = require("ws").Server; //create a websocketserver variable, contructor. server key of ws module
var wss = new WebSocketServer({ port: 3000 }); //instance of websocketserver, create a new wss which runs on own protocol
// connect with ws://

wss.on("connection", function(ws) {

  ws.send("Welcome to cyber chat");

});
// listener for new connections. WS connected in point. one client connection, we edit their individual connect using ws variable
