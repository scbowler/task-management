const { taskCollaborators } = require('../../../db/models');
const { sendError } = require('../../../helpers/error_handling');
const { abvName, userInitials } = require('../../../helpers/general');

module.exports = async (req, res) => {
    const { task } = req;

    try {
        const collaborators = await taskCollaborators.findAll({
            attributes: ['isLead', 'pid'],
            include: {
                association: 'user',
                attributes: ['color', 'firstName', 'lastName']
            },
            order: [['isLead', 'DESC']],
            where: {
                taskId: task.id
            }
        });

        const formattedData = collaborators.map(collaborator => {
            return {
                color: collaborator.user.color,
                id: collaborator.pid,
                initials: userInitials(collaborator.user),
                isLead: collaborator.isLead,
                name: abvName(collaborator.user),
                open: false
            }
        });

        res.send({
            success: true,
            collaborators: formattedData
        });

    } catch(err){
        sendError(res, err, 'Error fetching task collaborators');
    }
}
