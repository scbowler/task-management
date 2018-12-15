const { tasks } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { params: { task_id } } = req;

    try {
        let task = await tasks.findByPid(task_id, {
            attributes: {
                exclude: ['id', 'deletedAt', 'listId', 'projectId', 'rank']
            },
            include: {
                association: 'list',
                attributes: ['name']
            }
        });

        if(task){
            task = task.dataValues;
            task.list = task.list.name;
        }

        res.send({
            success: true,
            task
        });
    } catch(err){
        sendError(res, err, 'Error fetching single task');
    }
}
