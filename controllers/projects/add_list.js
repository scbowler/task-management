const { lists } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { body: { listName },  project } = req;
    const { user } = req;

    try {
        if (!listName) throw new StatusError(422, null, 'No list name provided' + errorFlag);

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
        sendError(res, err, 'Error adding list to project');
    }
}
