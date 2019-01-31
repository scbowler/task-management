const { timeTracking } = require('../../../db/models');
const { sendError } = require('../../../helpers/error_handling');
const { abvName } = require('../../../helpers/general');

module.exports = async (req, res) => {
    const { task, user } = req;
    try {
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
