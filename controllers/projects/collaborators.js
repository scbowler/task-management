const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { projects, projectUsers, users } = require('../../db/models');

exports.add = async (req, res) => {
    const { params: { project_id, user_id }, user } = req;

    try {
        const project = await projects.findByPid(project_id, {
            attributes: ['createdById', 'id']
        });

        if(!project) throw new StatusError(422, [], 'Invalid project ID' + errorFlag);

        if (user.id !== project.createdById) throw new StatusError(401, [], 'Not Authorized');

        const foundUser = await users.findByPid(user_id, {
            attributes: ['id']
        });

        if(!foundUser) throw new StatusError(422, [], 'Invalid user ID' + errorFlag);

        const projectUser = projectUsers.build({
            projectId: project.id,
            userId: foundUser.id
        });

        await projectUser.save();

        res.send({
            message: 'Collaborator added to project',
            success: true
        });
    } catch(err){
        sendError(res, err, 'Error adding collaborator');
    }
}

exports.remove = async (req, res) => {
    const { params: { project_id, user_id }, user } = req;

    try {
        const project = await projects.findByPid(project_id, {
            attributes: ['createdById', 'id']
        });

        if(!project) throw new StatusError(422, [], 'Invalid project ID' + errorFlag);

        if (user.id !== project.createdById) throw new StatusError(401, [], 'Not Authorized');

        const foundUser = await users.findByPid(user_id, {
            attributes: ['id']
        });

        if(!foundUser) throw new StatusError(422, [], 'Invalid user ID' + errorFlag);

        const projectUser = await projectUsers.findOne({
            where: {
                projectId: project.id,
                userId: foundUser.id
            }
        });

        if(projectUser){
            await projectUser.destroy();
        }

        res.send({
            message: 'Collaborator removed from project',
            success: true
        });
    } catch (err) {
        sendError(res, err, 'Error removing collaborator');
    }
}
