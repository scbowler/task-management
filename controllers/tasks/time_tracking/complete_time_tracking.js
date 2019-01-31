const { timeTracking, timeTrackingStatuses } = require('../../../db/models');
const { sendError, StatusError } = require('../../../helpers/error_handling');

module.exports = async (req, res) => {
    const { params: { tracking_id }, task, user } = req;
    try {
        const { running, stopped } = await timeTrackingStatuses.getIdsByMids('running', 'stopped');

        if(!running) throw new StatusError(500, [], 'Unknown time tracking status');

        const timer = await timeTracking.findOne({
            attributes: ['id', 'start'],
            where: {
                pid: tracking_id,
                statusId: running,
                taskId: task.id,
                userId: user.id                
            }
        });

        const now = new Date().getTime();

        timer.end = now;
        timer.elapsed = new Date().getTime() - timer.start;
        timer.statusId = stopped;

        await timer.save();

        res.send({
            success: true
        });
    } catch(err){ 
        sendError(res, err, 'Error stopping timer');
    }
}
