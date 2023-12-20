"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
var server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        console.log("Received request: ".concat(data));
        var requestData = JSON.parse(data.toString());
        console.log('Request data:', requestData);
    });
});
server.listen(3000, 'localhost', function () {
    console.log('Server is listening on port 3000');
});
