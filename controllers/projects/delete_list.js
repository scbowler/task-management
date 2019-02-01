const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { io, list, listOwner, project, projectOwner } = req;
    try {
        if(!listOwner && !projectOwner){
            throw new StatusError(401, [], 'Not Authorized' + errorFlag);
        }

        await list.destroy();

        io.of(`/project-${project.pid}`).emit('update-project');

        res.send({
            success: true,
            message: 'List deleted'
        });
    } catch(err){
        sendError(res, err, 'Error deleting list');
    }
}
