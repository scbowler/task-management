const { Op } = require('sequelize');
const { timeTracking } = require('../../../db/models');
const { sendError } = require('../../../helpers/error_handling');
const { userInitials } = require('../../../helpers/general');

module.exports = async (req, res) => {
    const { task, user } = req;

    try{
        let times = await timeTracking.findAll({
            attributes: ['start', 'end', 'elapsed', 'pid', 'userId'],
            where: {
                taskId: task.id,
                end: {
                    [Op.ne]: null
                }
            },
            include: {
                association: 'user',
                attributes: ['color', 'firstName', 'lastName']
            }
        });

        times = times.map( t => {
            return {
                startTime: t.start,
                endTime: t.end,
                total: t.elapsed,
                owner: {
                    initials: userInitials(t.user),
                    name: `${t.user.firstName} ${t.user.lastName}`,
                    color: t.user.color
                },
                pid: t.pid,
                isOwner: t.userId === user.id
            }
        });

        res.send({
            success: true,
            times
        });
    } catch(err){
        sendError(res, err, 'Error getting time tracking list');
    }
}
