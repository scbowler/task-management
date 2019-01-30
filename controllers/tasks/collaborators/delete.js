const { taskCollaborators } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');
const { io } = require('../../../services/websocket');

module.exports = async (req, res) => {
    const { params: { collaborator_id }, task } = req;

    try {
        const collaborator = await taskCollaborators.findByPid(collaborator_id);

        if(!collaborator) throw new StatusError(422, [], 'Unknown collaborator ID' + errorFlag);

        await collaborator.destroy();

        io.of(`/task-${task.pid}`).emit('update-collaborators');

        io.of(`/project-${task.project.pid}`).emit('update-lists', {
            lists: [task.list.pid],
            projectId: task.project.pid
        });

        res.send({
            success: true
        });
    } catch(err) {
        sendError(res, err, 'Error updating collaborator lead status');
    }
}
