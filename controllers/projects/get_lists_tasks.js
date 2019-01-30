const { Op } = require('sequelize');
const { lists, projects, taskCollaborators, tasks, timeTracking } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { abvName, userInitials } = require('../../helpers/general');

module.exports = async (req, res) => {
    const { params: { list_id, project_id }, user } = req;

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

            formattedTasks = await Promise.all(foundTasks.map(async task => {
                let isCollaborator = false;

                const {count = 0, rows = []} = await taskCollaborators.findAndCountAll({
                    attributes: ['userId'],
                    where: {
                        taskId: task.id
                    }
                });

                if(rows.findIndex(col => col.userId === user.id) >= 0){
                    isCollaborator = true;
                }

                return {
                    collaborators: {
                        count,
                        isCollaborator
                    },
                    name: task.name,
                    pid: task.pid,
                    time: timers[task.id] || 0
                }
            }));
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
