const { projectUsers, tasks, taskCollaborators, users } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');
const { io } = require('../../../services/websocket');

module.exports = async (req, res) => {
    const { params: { collaborator_id, task_id }, user } = req;

    try {
        const task = await tasks.findByPid(task_id, {
            attributes: ['id'],
            include: {
                association: 'project',
                attributes: ['id']
            }
        });

        if(!task) throw new StatusError(422, [], 'Unknown task ID' + errorFlag);

        const isProjectUser = await projectUsers.findOne({
            attributes: ['id'],
            where: {
                projectId: task.project.id,
                userId: user.id
            }
        });

        if(!isProjectUser) throw new StatusError(401, [], 'Not Unauthorized' + errorFlag);

        const collaborator = await taskCollaborators.findByPid(collaborator_id);

        if(!collaborator) throw new StatusError(422, [], 'Unknown collaborator ID' + errorFlag);

        collaborator.isLead = !collaborator.isLead;

        await collaborator.save();

        io.of(`/task-${task_id}`).emit('update-collaborators');

        res.send({
            success: true
        });
    } catch(err) {
        sendError(res, err, 'Error updating collaborator lead status');
    }
}
