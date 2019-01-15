const { tasks, timeTracking, timeTrackingStatuses } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');

module.exports = async (req, res) => {
    const { params: { task_id }, user } = req;

    try {
        const task = await tasks.findByPid(task_id, {
            attributes: ['id'],
            include: {
                association: 'project',
                attributes: ['id']
            }
        });

        if(!task) throw new StatusError(422, [], 'Unknown task id' + errorFlag);

        const { running } = await timeTrackingStatuses.getIdsByMids('running');

        if(!running) throw new StatusError(500, [], 'Unknown time tracking status');

        let time = await timeTracking.findOne({
            where: {
                userId: user.id,
                statusId: running
            }
        });

        if(!time){
            const newTime = timeTracking.build({
                start: new Date().getTime(),
                projectId: task.project.id,
                statusId: running,
                taskId: task.id,
                userId: user.id
            });

            time = await newTime.save();
        }


        res.send({
            success: true,
            task_id,
            email: user.email,
            running
        });
    } catch(err){
        console.log(err);
        sendError(res, err, 'Error starting new time tracking');
    }
}
