const jwt = require('jwt-simple');
const { taskMessages, tasks, users } = require('../../db/models');
const { jwt: { secret } } = require('../../config');

exports.addMessage = async (taskPid, taskId, message, user) => {
    const { taskId: pidFromClient, text } = message;

    if(taskPid !== pidFromClient) return;

    const newMessage = taskMessages.build({
        authorId: user.id,
        message: text,
        taskId
    });

    return newMessage.save();
}

exports.getTaskId = async taskPid => {
    const task = await tasks.findByPid(taskPid, {
        attributes: ['id']
    });

    if(task) return task.id;
    
    return null
}

exports.getTaskMessages = async taskId => {
    const messages = await taskMessages.findAll({
        attributes: ['createdAt', 'message', 'pid'],
        include: [
            {
                association: 'author',
                attributes: ['firstName', 'lastName']

            }
        ],
        where: {
            taskId
        },
        order: [['createdAt', 'DESC']]
    });

    return messages.map(msg => {
        const plainMsg = msg.dataValues;
        plainMsg.author = `${msg.author.firstName} ${msg.author.lastName[0].toUpperCase()}.`;

        return plainMsg;
    });
}

exports.userFromToken = async token => {
    const payload = jwt.decode(token, secret);

    return users.findByPk(payload.uid);
}
