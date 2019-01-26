const { Op } = require('sequelize');
const { projectUsers, tasks, taskCollaborators } = require('../../../db/models');
const { errorFlag, sendError, StatusError } = require('../../../helpers/error_handling');
const { abvName, userInitials } = require('../../../helpers/general');

module.exports = async (req, res) => {
    const { body: { collaborators }, params: { task_id }, user } = req;

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

        if(!isProjectUser) throw new StatusError(401, [], 'Not Authorized' + errorFlag);

        res.send({
            success: true,
            collaborators,
            task_id
        });
    } catch(err){
        console.log('Error:', err);
        sendError(res, err, 'Error adding collaborators to task');
    }
}
