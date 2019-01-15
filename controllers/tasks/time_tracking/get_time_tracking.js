const { timeTracking, timeTrackingStatuses } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');

module.exports = async (req, res) => {
    try {
        const statusIds = await timeTrackingStatuses.getIdsByMids('running', 'stopped');


        res.send({
            success: true,
            message: 'Get task time tracking',
            statusIds
        });
    } catch(err){
        sendError(res, err, 'Error getting tasks time tracking');
    }
}
