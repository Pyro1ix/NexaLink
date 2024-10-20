const express =
require)('express')
const { appendFile } = require('fs');
const http = require('http');
const socketIo = 
require('socket.io')

const app = express();
const server =
http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
socket.on('message', (msg) => {
  io.emit('message', msg);
});
socket.on('disconnect', () => {
  console.log('user disconnected');
   });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});npm install express
