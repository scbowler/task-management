const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { projectOwner, task, taskOwner } = req;
    
    try {
        if(!taskOwner && !projectOwner){
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
