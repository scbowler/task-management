const io = require('socket.io')({ path: '/ws' });
const { idRegexBase } = require('../../helpers/validation').rawRegex;
const { addMessage, getTaskId, getTaskMessages, userFromToken } = require('./helpers');
const msgsRegex = new RegExp(`^\/msgs-${idRegexBase}$`, 'i');
const projectRegex = new RegExp(`^\/project-${idRegexBase}$`, 'i');
const taskRegex = new RegExp(`^\/task-${idRegexBase}$`, 'i');
const userRegex = new RegExp(`^\/user-${idRegexBase}$`, 'i');

exports.io = io;

exports.listeners = app => {

    io.of('/project-settings').on('connect', socket => {
        socket.on('collaborator-update', message => {
            io.of(`/user-${message.userId}`).emit('update-projects');
        });
    });

    io.of(taskRegex).on('connect', socket => {
        socket.on('update-task', taskId => {
            io.of(`/task-${taskId}`).emit('update-task');
        });

        socket.on('task-deleted', taskId => {
            io.of(`/task-${taskId}`).emit('task-deleted');
        });

        socket.on('time-tracking-update', taskId => {
            io.of(`/task-${taskId}`).emit('time-tracking-update');
        });
    });

    io.of(projectRegex).on('connect', socket => {
        socket.on('update-lists', message => {
            io.of(`/project-${message.projectId}`).emit('update-lists', message);
        });
        socket.on('update-project', projectId => {
            io.of(`/project-${projectId}`).emit('update-project');
        });
        socket.on('update-task', projectId => {
            io.of(`/project-${projectId}`).emit('update-task');
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

        socket.on('new-message', async message => {
            await addMessage(taskPid, taskId, message, user);

            const messages = await getTaskMessages(taskId);
            
            nsp.emit('update-messages', { messages });
        })
    });

    io.listen(9050);
    console.log('Socket Server on PORT:', 9050);
}
