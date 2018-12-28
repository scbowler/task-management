const io = require('socket.io')({ path: '/ws' });
const { Server } = require('http');

module.exports = app => {
    

    io.on('connection', socket => {
        console.log('Connection Made');

        socket.on('disconnect', () => {
            console.log('User Disconnected');
        });
    });

    io.listen(9050);
    console.log('Socket Server on PORT:', 9050);
}
