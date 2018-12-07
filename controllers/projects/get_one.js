const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { projects } = require('../../db/models');

module.exports = async (req, res) => {
    const { project_id } = req.params;

    try {
        if(!project_id) throw new StatusError(422, [], 'No project id provided' + errorFlag);

        const project = await projects.findByPid(project_id, {
            attributes: ['id', 'name']
        });

        if(!project) throw new StatusError(422, [], 'No project found with provided id');

        res.send({
            success: true,
            project: {
                name: project.name
            }
        });
    } catch(err) {
        sendError(res, err, 'Error fetching project');
    }
}
