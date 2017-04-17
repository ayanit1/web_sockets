
var ws = new WebSocket("ws://localhost:3000"); //creates instance of websocket

ws.onopen = function() {
  setTitle("Connected to Cyber Chat");
}; //On open set title of page

ws.onclose = function() {
  setTitle("DISCONNECTED");
}; //When web socket closes set title

ws.onmessage = function(payload) {
  printMessage(payload.data);
};//When we recieve a message

document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    input.value = '';
};

function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}
