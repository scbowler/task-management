const { projectUsers, tasks, timeTracking } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');
const { abvName } = require('../../../helpers/general');

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
            attributes: ['elapsed', 'pid', 'start', 'userId'],
            include: [
                {
                    association: 'status',
                    attributes: ['mid']
                },
                {
                    association: 'user',
                    attributes: ['firstName', 'lastName']
                }
            ],
            where: {
                taskId: task.id
            }
        });

        const formattedTrackings = {
            running: [],
            total: 0
        }

        if(trackings){
            trackings.map(time => {
                const isOwner = time.userId === user.id;

                if(time.status.mid === 'running'){
                    return formattedTrackings.running.push({
                        isOwner,
                        pid: time.pid,
                        start: time.start,
                        user: abvName(time.user)
                    });
                }

                formattedTrackings.total += time.elapsed
            });
        }

        res.send({
            success: true,
            timeTracking: formattedTrackings
        });
    } catch(err){
        sendError(res, err, 'Error getting tasks time tracking');
    }
}
