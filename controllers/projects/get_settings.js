const { Op } = require('sequelize');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { projects, projectUsers, users } = require('../../db/models');

module.exports = async (req, res) => {
    const { params: { project_id }, user } = req;

    try {
        const project = await projects.findOne({
            attributes: ['description', 'id', 'name'],
            where: {
                createdById: user.id,
                pid: project_id
            }
        });

        if(!project) throw new StatusError(401, [], 'Not Authorized' + errorFlag);

        const userAttributes = ['email', 'firstName', 'id', 'lastName', 'pid'];

        const associatedUsers = await projectUsers.findAll({
            where: {
                projectId: project.id,
                userId: {
                    [Op.ne]: user.id
                }
            },
            include: {
                association: 'user',
                attributes: userAttributes
            }
        });

        let collaborators = [];
        const excludeUsers = [user.id];

        if(associatedUsers){
            collaborators = associatedUsers.map(projUser => {
                const user = projUser.user.dataValues;

                excludeUsers.push(user.id);

                return cleanUser(user);
            });
        }

        let availableUsers = [];

        const remainingUsers = await users.findAll({
            attributes: userAttributes,
            where: {
                id: {
                    [Op.notIn]: excludeUsers
                }
            }
        });

        if(remainingUsers){
            availableUsers = remainingUsers.map(cleanUser);
        }

        res.send({
            success: true,
            availableUsers,
            collaborators,
            owner: cleanUser(user),
            project: {
                description: project.description,
                name: project.name
            }
        });
    } catch(err){
        sendError(res, err, 'Error fetching project\'s setting data');
    }
}

function cleanUser(user){
    if(user.dataValues){
        user = user.dataValues;
    }

    return {
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        pid: user.pid
    }
}
