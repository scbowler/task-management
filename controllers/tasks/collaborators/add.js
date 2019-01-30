const { projectUsers, tasks, taskCollaborators, users } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');
const { io } = require('../../../services/websocket');

module.exports = async (req, res) => {
    const { body: { collaborators }, params: { task_id }, user } = req;

    try {
        if(!collaborators.length) throw new StatusError(422, [], 'No collaborators received' + errorFlag);

        const task = await tasks.findByPid(task_id, {
            attributes: ['id', 'projectId'],
            include: [
                {
                    association: 'project',
                    attributes: ['pid']
                },
                {
                    association: 'list',
                    attributes: ['pid']
                }
            ]
        });

        if(!task) throw new StatusError(422, [], 'Unknown task ID' + errorFlag);

        const isProjectUser = await projectUsers.findOne({
            attributes: ['id'],
            where: {
                projectId: task.projectId,
                userId: user.id
            }
        });

        if(!isProjectUser) throw new StatusError(401, [], 'Not Authorized' + errorFlag);


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

        io.of(`/task-${task_id}`).emit('update-collaborators');

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
