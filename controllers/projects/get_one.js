const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { lists, projects } = require('../../db/models');

module.exports = async (req, res) => {
    const { project_id } = req.params;

    try {
        if(!project_id) throw new StatusError(422, [], 'No project id provided' + errorFlag);

        const project = await projects.findByPid(project_id, {
            attributes: ['id', 'name']
        });

        if(!project) throw new StatusError(422, [], 'No project found with provided id');

        const projLists = await lists.findAll({
            attributes: ['name', 'pid'],
            where: {
                projectId: project.id
            },
            order: [['rank']]
        });

        const tasks = {};

        if(projLists){
            projLists.map(proj => tasks[proj.pid] = []);
        }

        res.send({
            success: true,
            project: {
                name: project.name,
                lists: projLists || [],
                tasks
            }
        });
    } catch(err) {
        sendError(res, err, 'Error fetching project');
    }
}
