const { idRegexBase } = require('../../helpers/validation').rawRegex;
const { addMessage, getTaskId, getTaskMessages, userFromToken } = require('./helpers');
const msgsRegex = new RegExp(`^\/msgs-${idRegexBase}$`, 'i');
const projectRegex = new RegExp(`^\/project-${idRegexBase}$`, 'i');
const taskRegex = new RegExp(`^\/task-${idRegexBase}$`, 'i');
const userRegex = new RegExp(`^\/user-${idRegexBase}$`, 'i');

exports.listeners = (io) => {
    io.of('/project-settings').on('connect', socket => {
        socket.emit('connected');
    });

    io.of(taskRegex).on('connect', socket => {
        socket.emit('connected');
    });

    io.of(projectRegex).on('connect', socket => {
        socket.emit('connected');
    });

    io.of(userRegex).on('connect', socket => {
        socket.emit('connected');
    });
    
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
        });
    });
}
