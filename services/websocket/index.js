const io = require('socket.io')({ path: '/ws' });
const { addMessage, getTaskId, getTaskMessages, userFromToken } = require('./helpers');
const msgsRegex = /\/msgs-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
const userRegex = /\/user-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

module.exports = app => {

    io.of('/project-settings').on('connect', socket => {
        socket.on('collaborator-update', message => {
            console.log('Collaborator Update:', message);

            io.of(`/user-${message.userId}`).emit('update-projects');

            
        });
    });

    io.of(userRegex).on('connect', socket => {

        socket.on('update', message => {
            socket.emit('update-projects');
        });
    });
    
    io.of(msgsRegex).on('connect', async socket => {
        const nsp = socket.nsp;

        const taskPid = nsp.name.replace('/msgs-', '');

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
