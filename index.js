const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const PORT = process.env.PORT || 9000;
const ENV = process.env.NODE_ENV || 'development';

const app = express();

require('./db');

app.use(cors());
app.use(express.json());
app.use(express.static(resolve(__dirname, 'client', 'dist')));

require('./routes')(app);
require('./services/websocket').listeners();

if(ENV === 'production'){
    https.createServer({
	ca: fs.readFileSync('ssl/server-ca.cert'),
        cert: fs.readFileSync('ssl/server.cert'),
        key: fs.readFileSync('ssl/server-private.key')
    }, app).listen(443, () => {
        console.log('Secure Server Running on PORT:443');
    });
} else {
    app.listen(PORT, () => {
        console.log('Server Running on PORT:', PORT);
    }).on('error', () => {
        console.log(`Server listen error, do you have another server running on PORT: ${PORT}?`);
    });
}
