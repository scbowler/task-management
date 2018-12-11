const { lists, projects, tasks } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { list_id, project_id } = req.params;

    try {
        if (!list_id) throw new StatusError(422, [], 'No list ID provided');
        if (!project_id) throw new StatusError(422, [], 'No project ID provided');

        const project = await projects.findByPid(project_id, {
            attributes: ['id']
        });

        if (!project) throw new StatusError(422, [], 'Invalid project ID provided');

        const list = await lists.findByPid(list_id, {
            attributes: ['id']
        });

        if(!list) throw new StatusError(422, [], 'Invalid list ID provided');

        const foundTasks = await tasks.findAll({
            attributes: ['name', 'pid'],
            where: {
                listId: list.id,
                projectId: project.id
            },
            order: [['rank']]
        })

        res.send({
            listId: list_id,
            success: true,
            tasks: foundTasks
        });
    } catch(err){
        sendError(res, err, 'Error getting list\'s tasks');
    }
}
