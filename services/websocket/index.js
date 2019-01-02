const io = require('socket.io')({ path: '/ws' });
const { addMessage, getTaskId, getTaskMessages, userFromToken } = require('./helpers');
const idRegex = /\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

module.exports = app => {
    
    io.of(idRegex).on('connect', async socket => {
        const nsp = socket.nsp;

        const taskPid = nsp.name.replace('/', '');

        const taskId = await getTaskId(taskPid);

        const user = await userFromToken(socket.handshake.query.token);

        const messages = await getTaskMessages(taskId);

        socket.emit('update-messages', { messages });

        // socket.on('disconnect', () => {
        //     console.log('User Disconnected');
        // });

        socket.on('new-message', async message => {
            await addMessage(taskPid, taskId, message, user);

            const messages = await getTaskMessages(taskId);
            
            nsp.emit('update-messages', { messages });
        })
    });

    io.listen(9050);
    console.log('Socket Server on PORT:', 9050);
}
