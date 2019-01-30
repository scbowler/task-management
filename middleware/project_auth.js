const { projectUsers, projects, tasks } = require('../db/models');
const { errorFlag, sendError, StatusError } = require('../helpers/error_handling');

module.exports = async (req, res, next) => {
    const { params: {project_id, task_id}, user } = req;

    try {
        if(project_id){
            const project = await projects.findByPid(project_id, {
                attributes: ['createdById', 'id', 'name']
            });
    
            if(!project) throw new StatusError(422, [], 'No project found with provided id' + errorFlag);
    
            const projectUser = await projectUsers.findOne({
                where: {
                    projectId: project.id,
                    userId: user.id
                }
            });
    
            if(!projectUser) throw new StatusError(401, [], 'Not Authorized' + errorFlag);

            req.project = project;
            req.projectOwner = project.id === user.id;

            return next();
        }

        throw new StatusError(422, [], 'No project ID or task ID received' + errorFlag);
    } catch(err){
        sendError(res, err, 'Project Auth Error', 401);
    }
}
