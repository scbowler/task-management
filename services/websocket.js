const io = require('socket.io')({ path: '/ws' });
const { Server } = require('http');
const idRegex = /\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

module.exports = app => {
    
    io.of(idRegex).on('connect', socket => {
        console.log('Connection Made');

        const nsp = socket.nsp;

        const user = {
            token: socket.handshake.query.token,
            name: socket.handshake.query.name
        }

        socket.emit('test', { some: 'data', name: nsp.name});

        socket.on('disconnect', () => {
            console.log('User Disconnected');
        });

        socket.on('new-message', (data) => {
            console.log('Server got new-message:', data, user);

            nsp.emit('new-message', { type: 'new-message', name: nsp.name })
        })
    });

    io.listen(9050);
    console.log('Socket Server on PORT:', 9050);
}
