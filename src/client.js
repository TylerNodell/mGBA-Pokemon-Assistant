"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
function sendCommand(command) {
    var client = net.createConnection({ port: 3001 }, function () {
        console.log('Connected to server');
        client.write(command);
    });
    client.on('data', function (data) {
        console.log("Response: ".concat(data));
        client.end();
    });
    client.on('end', function () {
        console.log('Disconnected from server');
    });
    client.on('error', function (error) {
        console.error("Error: ".concat(error));
    });
}
