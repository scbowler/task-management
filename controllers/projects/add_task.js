const { lists, projects, tasks } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { list_id, project_id } = req.params;
    const { name } = req.body;
    const { user } = req;

    try {
        if (!list_id) throw new StatusError(422, null, 'No list ID provided' + errorFlag);
        if (!project_id) throw new StatusError(422, null, 'No project ID provided' + errorFlag);
        if (!name) throw new StatusError(422, null, 'No task name provided' + errorFlag);

        const list = await lists.findByPid(list_id, {
            attributes: ['id']
        });

        if (!list) throw new StatusError(422, null, 'Invalid list ID provided' + errorFlag);

        const project = await projects.findByPid(project_id, {
            attributes: ['id']
        });

        if (!project) throw new StatusError(422, null, 'Invalid project ID provided' + errorFlag);

        const newTask = tasks.build({
            createdById: user.id,
            listId: list.id,
            name,
            projectId: project.id,
            rank: new Date().getTime(),
        });

        const task = await newTask.save();

        res.send({
            success: true,
            taskId: task.pid
        });
    } catch(err) {
        sendError(res, err, 'Error creating new task');
    }
}
