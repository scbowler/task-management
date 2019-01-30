const { Op } = require('sequelize');
const { projectUsers, taskCollaborators } = require('../../../db/models');
const { sendError } = require('../../../helpers/error_handling');
const { abvName } = require('../../../helpers/general');

module.exports = async (req, res) => {
    const { task } = req;
    try {
        const currentCollaborators = await taskCollaborators.findAll({
            attributes: ['userId'],
            where: {
                taskId: task.id
            }
        });

        let currentIds = [];

        if(currentCollaborators.length){
            currentIds = currentCollaborators.map(collaborator => collaborator.userId);
        }

        const available = await projectUsers.findAll({
            where: {
                userId: {
                    [Op.notIn]: currentIds
                },
                
                projectId: task.projectId
            },
            include: {
                association: 'user',
                attributes: ['firstName', 'lastName', 'pid']
            }
        });

        const formattedAvailable = available.map(available => {
            return {
                text: abvName(available.user),
                value: available.user.pid
            }
        });

        res.send({
            success: true,
            availableCollaborators: formattedAvailable
        });
    } catch(err){
        console.log('Error:', err);
        sendError(res, err, 'Error getting available collaborators for task');
    }
}
