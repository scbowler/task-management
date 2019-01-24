const { Op } = require('sequelize');
const { projectUsers, tasks, taskCollaborators } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');
const { abvName, userInitials } = require('../../../helpers/general');

module.exports = async (req, res) => {
    const { params: { task_id }, user } = req;

    try {
        const task = await tasks.findByPid(task_id, {
            attributes: ['id', 'projectId']
        });

        if(!task) throw new StatusError(422, [], 'Unknown task ID' + errorFlag);

        const isProjectUser = await projectUsers.findOne({
            attributes: ['id'],
            where: {
                projectId: task.projectId,
                userId: user.id
            }
        });

        if(!isProjectUser) throw new StatusError(401, [], 'Not Authorized');

        const collaborators = await taskCollaborators.findAll({
            attributes: ['isLead', 'pid'],
            include: {
                association: 'user',
                attributes: ['firstName', 'lastName']
            }
        });

        const formattedData = collaborators.map(collaborator => {
            return {
                id: collaborator.pid,
                initials: userInitials(collaborator.user),
                isLead: collaborator.isLead,
                name: abvName(collaborator.user)
            }
        });

        res.send({
            success: true,
            collaborators: formattedData
        });

    } catch(err){
        console.log('Err', err);
        sendError(res, err, 'Error fetching task collaborators');
    }
}
