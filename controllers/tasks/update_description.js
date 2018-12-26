const { tasks } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { body: { description }, params: { task_id } } = req;

    try {
        if(!description){
            throw new StatusError(422, [], 'No description received' + errorFlag);
        }

        if(!task_id){
            throw new StatusError(422, [], 'No task ID received' + errorFlag);
        }

        let task = await tasks.findByPid(task_id, {
            attributes: {
                exclude: ['createdById', 'deletedAt', 'listId', 'projectId', 'rank']
            },
            include: [
                {
                    association: 'createdBy',
                    attributes: ['firstName', 'lastName']
                },
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

        if(!task){
            throw new StatusError(422, [], 'Unknown task ID given' + errorFlag);
        }

        task.description = description;

        await task.save();

        task = task.dataValues;
        task.createdBy = `${task.createdBy.firstName} ${task.createdBy.lastName[0].toUpperCase()}.`;
        task.list = task.list.name;
        task.project = task.project.name

        delete task.id;

        res.send({
            success: true,
            task
        });
    } catch(err){
        console.log('Error:', err);
        sendError(res, err, 'Error updating description');
    }
    
}
