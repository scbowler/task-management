const { tasks } = require('../../db/models');
const { sendError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { user } = req;

    try {
        let task = await tasks.findByPk(req.task.id, {
            attributes: {
                exclude: ['id', 'createdById', 'deletedAt', 'listId', 'projectId', 'rank']
            },
            include: [
                {
                    association: 'createdBy',
                    attributes: ['firstName', 'id', 'lastName']
                },
                {
                    association: 'list',
                    attributes: ['name', 'pid']
                },
                {
                    association: 'project',
                    attributes: ['name']
                }
            ]
        });

        if(task){
            task = task.dataValues;
            task.isOwner = task.createdBy.id === user.id;
            task.createdBy = `${task.createdBy.firstName} ${task.createdBy.lastName[0].toUpperCase()}.`;
            task.listId = task.list.pid;
            task.list = task.list.name;
            task.project = task.project.name;
        }

        res.send({
            success: true,
            task
        });
    } catch(err){
        sendError(res, err, 'Error fetching single task');
    }
}
