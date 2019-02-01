const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { io, projectOwner, task, taskOwner } = req;
    
    try {
        if(!taskOwner && !projectOwner){
            throw new StatusError(401, [], 'Not Authorized' + errorFlag);
        }

        await task.destroy();

        io.of(`/task-${task.pid}`).emit('task-deleted');

        io.of(`/project-${task.project.pid}`).emit('update-lists', {
            lists: [task.list.pid],
            projectId: task.project.pid
        });

        res.send({
            success: true,
            message: 'Task deleted'
        });
    } catch(err){
        sendError(res, err, 'Error deleting task');
    }
}
