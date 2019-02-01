const { taskCollaborators, users } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');

module.exports = async (req, res) => {
    const { body: { collaborators }, io, task } = req;

    try {
        if(!collaborators.length) throw new StatusError(422, [], 'No collaborators received' + errorFlag);

        const usersToAdd = await users.findAll({
            attributes: ['id'],
            where: {
                pid: collaborators
            }
        });

        if(!usersToAdd.length) throw new StatusError(422, [], 'No valid user IDs received' + errorFlag);

        await Promise.all(usersToAdd.map(user => taskCollaborators.create({
            taskId: task.id,
            userId: user.id
        })));

        io.of(`/task-${task.pid}`).emit('update-collaborators');

        io.of(`/project-${task.project.pid}`).emit('update-lists', {
            lists: [task.list.pid],
            projectId: task.project.pid
        });

        res.send({
            success: true
        });
    } catch(err){
        sendError(res, err, 'Error adding collaborators to task');
    }
}
