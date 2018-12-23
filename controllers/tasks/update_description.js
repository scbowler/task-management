const { tasks } = require('../../db/models');
const { errorFlag, sendError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { body: { description }, params: { task_id } } = req;

    try {
        res.send({
            success: true,
            description,
            task_id,
            message: 'Update description called'
        });
    } catch(err){
        sendError(res, err, 'Error updating description');
    }
    
}
