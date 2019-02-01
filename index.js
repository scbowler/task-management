const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const http = require('http');
const https = require('https');
const socket = require('socket.io');
const fs = require('fs');
const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || ENV === 'production' ? 443 : 9000;

const app = express();

require('./db');

app.use(cors());
app.use(express.json());
app.use(express.static(resolve(__dirname, 'client', 'dist')));

let server = null;
let message = null;

if(ENV === 'production'){
    server = https.createServer({
        ca: fs.readFileSync('ssl/server-ca.cert'),
        cert: fs.readFileSync('ssl/server.cert'),
        key: fs.readFileSync('ssl/server-private.key')
    }, app);

    message = 'Secure Server Running on PORT:' + PORT
} else {
    server = http.createServer(app);

    message = 'Server Running on PORT: ' + PORT;
}

const io = socket(server);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

require('./services/websocket').listeners(io);

require('./routes')(app);

server.listen(PORT, () => console.log(message)).on('error', () => {
    console.log(`Server listen error, do you have another server running on PORT: ${PORT}?`);
});;
