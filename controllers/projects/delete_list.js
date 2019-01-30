const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { list, listOwner, projectOwner } = req;
    try {
        if(!listOwner && !projectOwner){
            throw new StatusError(401, [], 'Not Authorized' + errorFlag);
        }

        await list.destroy();

        res.send({
            success: true,
            message: 'List deleted'
        });
    } catch(err){
        sendError(res, err, 'Error deleting list');
    }
}
