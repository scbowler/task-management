const { timeTracking, timeTrackingStatuses } = require('../../../db/models');
const { sendError, StatusError } = require('../../../helpers/error_handling');
const { io } = require('../../../services/websocket');

module.exports = async (req, res) => {
    const { task, user } = req;

    try {
        const { running, stopped } = await timeTrackingStatuses.getIdsByMids('running', 'stopped');

        if(!running) throw new StatusError(500, [], 'Unknown time tracking status');

        let time = await timeTracking.findOne({
            where: {
                userId: user.id,
                statusId: running
            },
            include: {
                association: 'task',
                attributes: ['pid']
            }
        });

        if(time){
            if(time.taskId !== task.id){
                const now = new Date().getTime();

                time.end = now;
                time.elapsed = new Date().getTime() - time.start;
                time.statusId = stopped;

                await time.save();

                io.of(`/task-${time.task.pid}`).emit('time-tracking-update');

                await newTimeTracking(user, task, running);
            }
        } else {
            await newTimeTracking(user, task, running);
        }

        io.of(`/task-${task.pid}`).emit('time-tracking-update');

        res.send({
            success: true,
        });
    } catch(err){
        sendError(res, err, 'Error starting new time tracking');
    }
}

function newTimeTracking(user, task, statusId){
    const newTimeTracking = timeTracking.build({
        start: new Date().getTime(),
        projectId: task.project.id,
        statusId,
        taskId: task.id,
        userId: user.id
    });

    return newTimeTracking.save();
}
