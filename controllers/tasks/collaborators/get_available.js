const { Op } = require('sequelize');
const { projectUsers, tasks, taskCollaborators } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');
const { abvName, userInitials } = require('../../../helpers/general');

module.exports = async (req, res) => {
    const { params: { project_id, task_id }, user } = req;
    try {
        const task = await tasks.findByPid(task_id, {
            attributes: ['id', 'projectId']
        });

        if(!task) throw new StatusError(422, [], 'Invalid task id' + errorFlag);

        const isProjectUser = await projectUsers.findOne({
            attributes: ['id'],
            where: {
                projectId: task.projectId,
                userId: user.id
            }
        });

        if(!isProjectUser) throw new StatusError('401', [], 'Not Authorized' + errorFlag);

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
