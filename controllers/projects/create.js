const { projects, projectStatuses, projectUsers } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { name, description } = req.body;

    try {
        const { user } = req;
        const errors = [];

        if (!name) errors.push('No name provided for new project' + errorFlag);
        if (!description) errors.push('No description provided for new project' + errorFlag);
        
        if(errors.length) throw new StatusError(422, errors);

        const status = await projectStatuses.findByMid('active', {
            attributes: ['id']
        });

        if(!status) throw new StatusError(500, null, 'Error finding project status info');

        const projectBuild = projects.build({
            createdById: user.id,
            description,
            name,
            projectStatusId: status.id
        });

        const project = await projectBuild.save();

        const projectUser = projectUsers.build({
            projectId: project.id,
            userId: user.id
        });

        await projectUser.save();

        res.send({
            success: true,
            message: 'New project created',
            pid: project.pid
        });
    } catch(err){
        sendError(res, err, 'Error creating new project');
    }
}
