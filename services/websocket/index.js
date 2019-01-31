const io = require('socket.io')({ path: '/ws' });
const { idRegexBase } = require('../../helpers/validation').rawRegex;
const { addMessage, getTaskId, getTaskMessages, userFromToken } = require('./helpers');
const msgsRegex = new RegExp(`^\/msgs-${idRegexBase}$`, 'i');

exports.io = io;

exports.listeners = () => {
    
    io.of(msgsRegex).on('connect', async socket => {
        const nsp = socket.nsp;

        const taskPid = nsp.name.replace('/msgs-', '');

        const taskId = await getTaskId(taskPid);

        const user = await userFromToken(socket.handshake.query.token);

        const messages = await getTaskMessages(taskId);

        socket.emit('update-messages', { messages });

        socket.on('new-message', async message => {
            await addMessage(taskPid, taskId, message, user);

            const messages = await getTaskMessages(taskId);
            
            nsp.emit('update-messages', { messages });
        })
    });

    io.listen(9050);
    console.log('Socket Server on PORT:', 9050);
}
