const { projectUsers, tasks, timeTracking, timeTrackingStatuses } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');

module.exports = async (req, res) => {
    const { user } = req;

    try {

        const { running } = await timeTrackingStatuses.getIdsByMids('running');

        const runningTimers = await timeTracking.findOne({
            attributes: ['start'],
            include: [
                {
                    association: 'project',
                    attributes: ['pid']
                },
                {
                    association: 'task',
                    attributes: ['name', 'pid']
                }
            ],
            where: {
                statusId: running,
                userId: user.id
            }
        });

        let timer = null;

        if(runningTimers){
            const { project, start, task } = runningTimers.dataValues;

            timer = {
                link: `/projects/${project.pid}/task/${task.pid}`,
                start,
                task: task.name
            };
        }

        res.send({
            success: true,
            message: 'Get user running time tracking',
            timer
        });
    } catch(err) {
        sendError(res, err, 'Error getting user running time tracking');
    }
}
