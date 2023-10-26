import WebSocket, { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });



console.log("Node Service started.");


wss.on("connection", ws => {

	console.log("Conectadooo!");

	ws.on("message", data => { 
	
		console.log(`Received:${data}`);	
	
	})

})