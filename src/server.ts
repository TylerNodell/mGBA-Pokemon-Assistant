import * as net from 'net';

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    // console.log(`Received request: ${data}`);
    
    const requestData = JSON.parse(data.toString());
    console.log('Request data:', requestData);
  });
});

server.listen(3000, 'localhost', () => {
  console.log('Server is listening on port 3000');
});


