const { tasks } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { params: { task_id } } = req;

    try {
        let task = await tasks.findByPid(task_id, {
            attributes: {
                exclude: ['id', 'deletedAt', 'listId', 'rank']
            },
            include: [
                {
                    association: 'list',
                    attributes: ['name']
                },
                {
                    association: 'project',
                    attributes: ['name']
                }
            ]
        });

        if(task){
            task = task.dataValues;
            task.list = task.list.name;
            task.project = task.project.name
        }

        res.send({
            success: true,
            task
        });
    } catch(err){
        sendError(res, err, 'Error fetching single task');
    }
}
