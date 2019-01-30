const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { lists, projects, projectUsers } = require('../../db/models');

module.exports = async (req, res) => {
    const { project, projectOwner, user } = req;

    try {
        const projLists = await lists.findAll({
            attributes: ['createdById', 'name', 'pid'],
            where: {
                projectId: project.id
            },
            order: [['rank']]
        });

        let cleanedLists = [];

        if(projLists){
            cleanedLists = projLists.map(list => {
                return {
                    isOwner: projectOwner || list.createdById === user.id,
                    name: list.name,
                    pid: list.pid
                }
            });
        }

        res.send({
            success: true,
            project: {
                isOwner: projectOwner,
                name: project.name,
                lists: cleanedLists
            }
        });
    } catch(err) {
        sendError(res, err, 'Error fetching project');
    }
}
