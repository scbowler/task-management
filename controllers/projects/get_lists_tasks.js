const { Op } = require('sequelize');
const { lists, projects, tasks, timeTracking } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { list_id, project_id } = req.params;

    try {
        if (!list_id) throw new StatusError(422, [], 'No list ID provided' + errorFlag);
        if (!project_id) throw new StatusError(422, [], 'No project ID provided' + errorFlag);

        const project = await projects.findByPid(project_id, {
            attributes: ['id']
        });

        if (!project) throw new StatusError(422, [], 'Invalid project ID provided' + errorFlag);

        const list = await lists.findByPid(list_id, {
            attributes: ['id']
        });

        if (!list) throw new StatusError(422, [], 'Invalid list ID provided' + errorFlag);

        const foundTasks = await tasks.findAll({
            attributes: ['id', 'name', 'pid'],
            where: {
                listId: list.id,
                projectId: project.id
            },
            order: [['rank']]
        });

        let formattedTasks = [];

        if(foundTasks){
            const taskIds = foundTasks.map(task => ({taskId: task.id}));

            const timers = await timeTracking.sumEach('elapsed', 'taskId', {
                where: {
                    [Op.or]: taskIds,
                    elapsed: {
                        [Op.not]: null
                    }
                }
            });

            formattedTasks = foundTasks.map(task => {
                return {
                    name: task.name,
                    pid: task.pid,
                    time: timers[task.id] || 0
                }
            });
        }

        res.send({
            listId: list_id,
            success: true,
            tasks: formattedTasks
        });
    } catch(err){
        console.log('Get Task Error:', err);
        sendError(res, err, 'Error getting list\'s tasks');
    }
}
