const { projectUsers, tasks, timeTracking, timeTrackingStatuses } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');

module.exports = async (req, res) => {
    const { params: { task_id }, user } = req;
    try {
        // const { running } = await timeTrackingStatuses.getIdsByMids('running');

        // if(!running) throw new StatusError(500, [], 'Unknown time tracking status');

        const task = await tasks.findByPid(task_id, {
            attributes: ['id'],
            include: {
                association: 'project',
                attributes: ['id']
            }
        });

        if(!task) throw new StatusError(422, [], 'Unknown task ID', errorFlag);

        const projectUser = await projectUsers.findOne({
            attributes: ['id'],
            where: {
                projectId: task.project.id,
                userId: user.id
            }
        });

        if(!projectUser) throw new StatusError(401, [], 'Not Authorized');

        let trackings = await timeTracking.findAll({
            attributes: ['createdAt', 'elapsed', 'pid', 'start', 'userId'],
            include: {
                association: 'status',
                attributes: ['mid']
            }
        });

        const formattedTrackings = {
            completed: [],
            running: []
        }

        if(trackings){
            trackings.map(time => {
                const isOwner = time.userId === user.id;

                if(time.status.mid === 'running'){
                    return formattedTrackings.running.push({
                        createdAt: time.createdAt,
                        pid: time.pid,
                        start: time.start,
                        isOwner
                    });
                }

                formattedTrackings.completed.push({
                    createdAt: time.createdAt,
                    pid: time.pid,
                    elapsed: time.elapsed,
                    isOwner
                });
            });
        }

        res.send({
            success: true,
            timeTracking: formattedTrackings
        });
    } catch(err){
        console.log('Get Tracking Error:', err);
        sendError(res, err, 'Error getting tasks time tracking');
    }
}
