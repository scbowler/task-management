const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { projectUsers, users } = require('../../db/models');

exports.add = async (req, res) => {
    const { params: { user_id }, io, project, projectOwner} = req;

    try {
        if (!projectOwner) throw new StatusError(401, [], 'Not Authorized' + errorFlag);

        const foundUser = await users.findByPid(user_id, {
            attributes: ['id']
        });

        if(!foundUser) throw new StatusError(422, [], 'Invalid user ID' + errorFlag);

        const projectUser = projectUsers.build({
            projectId: project.id,
            userId: foundUser.id
        });

        await projectUser.save();

        io.of(`/user-${user_id}`).emit('update-projects');

        res.send({
            message: 'Collaborator added to project',
            success: true
        });
    } catch(err){
        sendError(res, err, 'Error adding collaborator');
    }
}

exports.remove = async (req, res) => {
    const { params: { user_id }, io, project, projectOwner } = req;

    try {
        if (!projectOwner) throw new StatusError(401, [], 'Not Authorized' + errorFlag);

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

            io.of(`/user-${user_id}`).emit('update-projects');
        }

        res.send({
            message: 'Collaborator removed from project',
            success: true
        });
    } catch (err) {
        sendError(res, err, 'Error removing collaborator');
    }
}
