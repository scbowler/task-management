const { tasks } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { body: { name }, io, list, project, user } = req;

    try {
        if (!name) throw new StatusError(422, null, 'No task name provided' + errorFlag);

        const newTask = tasks.build({
            createdById: user.id,
            listId: list.id,
            name,
            projectId: project.id,
            rank: new Date().getTime(),
        });

        const task = await newTask.save();

        io.of(`/project-${project.pid}`).emit('update-lists', {
            projectId: project.pid,
            lists: [ list.pid ]
        });

        res.send({
            success: true,
            taskId: task.pid
        });
    } catch(err) {
        sendError(res, err, 'Error creating new task');
    }
}
