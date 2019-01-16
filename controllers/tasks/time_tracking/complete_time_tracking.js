const { projectUsers, tasks, timeTracking, timeTrackingStatuses } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');
const { abvName } = require('../../../helpers/general');

module.exports = async (req, res) => {
    const { params: { task_id, tracking_id }, user } = req;
    try {

        const { running, stopped } = await timeTrackingStatuses.getIdsByMids('running', 'stopped');

        if(!running) throw new StatusError(500, [], 'Unknown time tracking status');

        const task = await tasks.findByPid(task_id, {
            attributes: ['id']
        });

        if(!task) throw new StatusError(422, [], 'Unknown task id' + errorFlag);

        const timer = await timeTracking.findOne({
            attributes: ['id', 'start'],
            where: {
                taskId: task.id,
                statusId: running,
                pid: tracking_id
            }
        });

        console.log('TIMER:', timer);

        const now = new Date().getTime();

        timer.end = now;
        timer.elapsed = new Date().getTime() - timer.start;
        timer.statusId = stopped;

        await timer.save();

        res.send({
            success: true,
            task_id,
            tracking_id
        });

    } catch(err){
        console.log('COMPLETE ERROR', err); 
        sendError(res, err, 'Error stopping timer');
    }
}