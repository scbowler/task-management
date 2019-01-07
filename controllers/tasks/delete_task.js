const { tasks } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { params: { task_id }, user } = req;
    
    try {
        const task = await tasks.findByPid(task_id, {
            attributes: ['createdById', 'id'],
            include: {
                association: 'project',
                attributes: ['createdById']
            }
        });

        if(task.createdById !== user.id && task.project.createdById !== user.id){
            throw new StatusError(401, [], 'Not Authorized' + errorFlag);
        }

        await task.destroy();

        res.send({
            success: true,
            message: 'Task deleted'
        });
    } catch(err){
        sendError(res, err, 'Error deleting task');
    }
}
