const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');

module.exports = async (req, res) => {
    try {

        res.send({
            success: true,
            message: 'Get all the available task collaborators'
        });
    } catch(err){
        sendError(res, err, 'Error getting available collaborators for task');
    }
}
