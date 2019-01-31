const { tasks } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { field, task_id } = req.params;
    const { [field]: content } = req.body;
    const editableFields = ['description', 'name'];


    try {
        if(!content){
            throw new StatusError(422, [], 'No content received' + errorFlag);
        }

        if(!task_id){
            throw new StatusError(422, [], 'No task ID received' + errorFlag);
        }

        let task = await tasks.findByPk(req.task.id, {
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
                    attributes: ['name', 'pid']
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

        if(!editableFields.includes(field)){
            throw new StatusError(422, [], 'Unknown task field' + errorFlag);
        }

        task[field] = content;

        await task.save();

        task = task.dataValues;
        task.createdBy = `${task.createdBy.firstName} ${task.createdBy.lastName[0].toUpperCase()}.`;
        task.listId = task.list.pid;
        task.list = task.list.name;
        task.project = task.project.name

        delete task.id;

        res.send({
            success: true,
            task
        });
    } catch(err){
        sendError(res, err, 'Error updating description');
    }
    
}
