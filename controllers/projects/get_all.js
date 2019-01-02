const { projectUsers } = require('../../db/models');
const { sendError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { user } = req;
    try {
        const foundProjects = await projectUsers.findAll({
            where: {
                userId: user.id
            },
            include: {
                association: 'project',
                attributes: ['description', 'name', 'pid'],
                include: {
                    association: 'createdBy',
                    attributes: ['firstName', 'lastName']
                }
            }
        });

        let formattedData = [];

        if(foundProjects){
            formattedData = foundProjects.map( proj => {
                const project = proj.project.dataValues;
                const createdBy = project.createdBy.dataValues;
                const user = `${createdBy.firstName} ${createdBy.lastName[0]}.`;

                return {
                    ...project,
                    user
                }
            })
        }

        res.send({
            success: true,
            projects: formattedData
        });
    } catch(err){
        sendError(res, err, 'Error getting project list');
    }
}
