const { projects } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    try {
        const foundProjects = await projects.findAll({
            attributes: ['description', 'name', 'pid'],
            include: {
                association: 'createdBy',
                attributes: ['firstName', 'lastName']
            }
        });

        let formattedData = [];

        if(foundProjects){
            formattedData = foundProjects.map( proj => {
                const { createdBy, ...project } = proj.dataValues;
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
