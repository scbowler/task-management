const { lists, projectUsers, projects, tasks } = require('../db/models');
const { errorFlag, sendError, StatusError } = require('../helpers/error_handling');

module.exports = async (req, res, next) => {
    const { params: {list_id, project_id, task_id}, user } = req;

    try {
        if(project_id){
            const project = await projects.findByPid(project_id, {
                attributes: ['createdById', 'description', 'id', 'name', 'pid']
            });
    
            if(!project) throw new StatusError(422, [], 'Invalid project ID provided' + errorFlag);
    
            const projectUser = await projectUsers.findOne({
                where: {
                    projectId: project.id,
                    userId: user.id
                }
            });
    
            if(!projectUser) throw new StatusError(401, [], 'Not Authorized' + errorFlag);

            req.project = project;
            req.projectOwner = project.createdById === user.id;
        }

        if(list_id){
            const list = await lists.findByPid(list_id, {
                attributes: ['createdById', 'id', 'pid', 'rank']
            });
    
            if (!list) throw new StatusError(422, null, 'Invalid list ID provided' + errorFlag);
    
            req.list = list;
            req.listOwner = list.createdById === user.id;
        }

        if(task_id && !req.project){
            const task = await tasks.findByPid(task_id, {
                attributes: ['createdById', 'id', 'listId', 'pid', 'projectId'],
                include: [
                    {
                        association: 'list',
                        attributes: ['id', 'pid']
                    },
                    {
                        association: 'project',
                        attributes: ['createdById', 'id', 'pid']
                    }
                ]
            });

            if(!task) throw new StatusError(422, null, 'Invalid task ID provided' + errorFlag);

            const projectUser = await projectUsers.findOne({
                where: {
                    projectId: task.projectId,
                    userId: user.id
                }
            });
    
            if(!projectUser) throw new StatusError(401, [], 'Not Authorized' + errorFlag);

            req.projectOwner = task.project.createdById === user.id;
            req.task = task;
            req.taskOwner = task.createdById === user.id;
        }

        if(req.project || req.task || req.list){
            return next();
        }

        throw new StatusError(422, [], 'No project ID or task ID received' + errorFlag);
    } catch(err){
        console.log('Project Auth Error:', err);
        sendError(res, err, 'Project Auth Error', 401);
    }
}
