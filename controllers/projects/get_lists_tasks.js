const { Op } = require('sequelize');
const { taskCollaborators, tasks, timeTracking } = require('../../db/models');
const { sendError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { list, project, user } = req;

    try {
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
                const {count = 0, rows = []} = await taskCollaborators.findAndCountAll({
                    attributes: ['userId', 'isLead'],
                    where: {
                        taskId: task.id
                    }
                });

                const userIndex = rows.findIndex(col => col.userId === user.id);

                let isCollaborator = userIndex >= 0;
                return {
                    collaborators: {
                        count,
                        isCollaborator,
                        isLead: isCollaborator && rows[userIndex].isLead
                    },
                    name: task.name,
                    pid: task.pid,
                    time: timers[task.id] || 0
                }
            }));
        }

        res.send({
            listId: list.pid,
            success: true,
            tasks: formattedTasks
        });
    } catch(err){
        sendError(res, err, 'Error getting list\'s tasks');
    }
}
