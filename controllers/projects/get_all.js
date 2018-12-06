const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { projects } = require('../../db/models');

module.exports = async (req, res) => {
    try {
        const foundProjects = await projects.findAll({
            attributes: ['description', 'name', 'pid']
        });

        res.send({
            success: true,
            projects: foundProjects
        });
    } catch(err){
        sendError(res, err, 'Error getting project list');
    }
}
