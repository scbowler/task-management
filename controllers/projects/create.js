const { projects, projectStatuses } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { name, description } = req.body;

    try {
        const errors = [];

        if (!name) errors.push('No name provided for new project');
        if (!description) errors.push('No description provided for new project');
        
        if(errors.length) throw new StatusError(422, errors);

        const status = await projectStatuses.findByMid('new', {
            attributes: ['id']
        });

        if(!status) throw new StatusError(500, null, 'Error finding project status info');

        const projectBuild = projects.build({
            name,
            description,
            projectStatusId: status.id
        });

        const project = await projectBuild.save();

        res.send({
            success: true,
            message: 'New project created',
            pid: project.pid
        });
    } catch(err){
        sendError(res, err, 'Error creating new project');
    }
}
