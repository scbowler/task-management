const { lists, projects } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { params: { project_id, list_id }, user } = req;
    try {
        const project = await projects.findByPid(project_id, {
            attributes: ['createdById', 'id']
        });

        if(!project) throw new StatusError(422, [], 'Unknown project ID');

        const list = await lists.findOne({
            attributes: ['createdById', 'id'],
            where: {
                pid: list_id,
                projectId: project.id
            }
        });

        if(list.createdById !== user.id && project.createdById !== user.id){
            throw new StatusError(401, [], 'Not Authorized');
        }

        await list.destroy();

        res.send({
            success: true,
            message: 'List deleted'
        });
    } catch(err){
        sendError(res, err, 'Error deleting list');
    }
}
