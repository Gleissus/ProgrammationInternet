const socket = new WebSocket('ws://localhost:9999');
socket.onopen = function() {
 console.log('Connecté au serveur WebSocket');
};
socket.onmessage = function(event) {
 const message = document.createElement('div');
 message.textContent = event.data;
 document.getElementById('messages').appendChild(message);
};
document.getElementById('formulaire').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    socket.send(message);
    document.getElementById('message').value = '';
   });
   
   const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 9999 });
const clients = [];
wss.on('connection', function connection(ws) {
 clients.push(ws);
 ws.on('message', function incoming(message) {
 console.log('received: %s', message);
 broadcast(String(message));
 });
 ws.send('Bienvenue sur le chat Gekkode!');
});
function broadcast(message) {
 clients.forEach(function(client) {
 client.send(message);
 });
}
console.log('Server started on port 9999');

