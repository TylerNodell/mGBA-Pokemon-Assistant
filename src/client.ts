import * as net from 'net';

function sendCommand(command: string): void {
  const client = net.createConnection({ port: 3001 }, () => {
    console.log('Connected to server');
    client.write(command);
  });

  client.on('data', (data) => {
    console.log(`Response: ${data}`);
    client.end();
  });

  client.on('end', () => {
    console.log('Disconnected from server');
  });

  client.on('error', (error) => {
    console.error(`Error: ${error}`);
  });
}
