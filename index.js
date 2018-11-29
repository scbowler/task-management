const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 9000;
const ENV = process.env.NODE_ENV || 'development';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(resolve(__dirname, 'client', 'dist')));

app.get('/api', (req, res) => {
    res.send('<h1>API Working | Status [<apn style="color: green">OK</apn>]</h1>');
});

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server Running on PORT:', PORT);
}).on('error', () => {
    console.log(`Server listen error, do you have another server running on PORT: ${PORT}?`);
});
