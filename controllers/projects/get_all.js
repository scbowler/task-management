const { Op } = require('sequelize');
const { projectUsers, timeTracking } = require('../../db/models');
const { sendError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { user } = req;
    try {
        const foundProjectUsers = await projectUsers.findAll({
            where: {
                userId: user.id
            },
            include: {
                association: 'project',
                attributes: ['description', 'id', 'name', 'pid'],
                include: {
                    association: 'createdBy',
                    attributes: ['firstName', 'id', 'lastName']
                }
            }
        });

        let formattedData = [];

        if(foundProjectUsers){
            const projectIds = foundProjectUsers.map(user => ({projectId: user.project.id}));

            const times = await timeTracking.sumEach('elapsed', 'projectId', {
                where: {
                    [Op.or]: projectIds,
                    elapsed: {
                        [Op.not]: null
                    }
                }
            });

            formattedData = foundProjectUsers.map( proj => {
                const project = proj.project.dataValues;
                const createdBy = project.createdBy.dataValues;
                const userName = `${createdBy.firstName} ${createdBy.lastName[0]}.`;

                return {
                    ...project,
                    isOwner: createdBy.id === user.id,
                    time: times[proj.project.id] || 0,
                    user: userName
                }
            });
        }

        res.send({
            success: true,
            projects: formattedData
        });
    } catch(err){
        sendError(res, err, 'Error getting project list');
    }
}
