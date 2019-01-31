const { timeTracking, timeTrackingStatuses } = require('../../../db/models');
const { sendError, StatusError } = require('../../../helpers/error_handling');
const { io } = require('../../../services/websocket');

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

        io.of(`/task-${task.pid}`).emit('time-tracking-update');

        io.of(`/project-${task.project.pid}`).emit('update-lists', {
            lists: [ task.list.pid ],
            projectId: task.project.pid
        });
        // socket.emit('time-tracking-update', taskId);

        // projectSocket.emit('update-lists', { lists: [listId], projectId });

        res.send({
            success: true
        });
    } catch(err){ 
        sendError(res, err, 'Error stopping timer');
    }
}
