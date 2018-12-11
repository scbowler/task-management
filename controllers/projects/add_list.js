const { lists, projects } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { project_id } = req.params;
    const { listName } = req.body;
    const { user } = req;

    try {
        if(!project_id) throw new StatusError(422, null, 'No project id provided' + errorFlag);
        if (!listName) throw new StatusError(422, null, 'No list name provided' + errorFlag);

        const project = await projects.findByPid(project_id, {
            attributes: ['id']
        });

        if (!project) throw new StatusError(422, null, 'Invalid project ID given' + errorFlag);

        const newList = lists.build({
            createdById: user.id,
            name: listName,
            rank: new Date().getTime(),
            projectId: project.id
        });

        const list = await newList.save();

        res.send({
            success: true,
            listId: list.pid
        });
    } catch(err){
        sendError(res, err, 'Error add list to project');
    }
}
