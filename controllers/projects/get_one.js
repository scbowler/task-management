const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { lists, projects, projectUsers } = require('../../db/models');

module.exports = async (req, res) => {
    const { params: { project_id }, user } = req;

    try {
        if(!project_id) throw new StatusError(422, [], 'No project id provided' + errorFlag);

        const project = await projects.findByPid(project_id, {
            attributes: ['createdById', 'id', 'name']
        });

        if(!project) throw new StatusError(422, [], 'No project found with provided id' + errorFlag);

        const projectUser = await projectUsers.findOne({
            where: {
                projectId: project.id,
                userId: user.id
            }
        });

        if(!projectUser) throw new StatusError(401, [], 'Not Authorized');

        const projLists = await lists.findAll({
            attributes: ['name', 'pid'],
            where: {
                projectId: project.id
            },
            order: [['rank']]
        });

        res.send({
            success: true,
            project: {
                isOwner: project.createdById === user.id,
                name: project.name,
                lists: projLists || []
            }
        });
    } catch(err) {
        sendError(res, err, 'Error fetching project');
    }
}
