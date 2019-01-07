const { Op } = require('sequelize');
const { lists, projects } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { centerRank } = require('../../helpers/general');

module.exports = async (req, res) => {
    const { body: { nextId }, params: { list_id, project_id } } = req;
    try {
        if(!nextId) throw new StatusError(400, [], 'Missing next list ID' + errorFlag);

        const project = await projects.findByPid(project_id, {
            attributes: ['id']
        });

        if(!project) throw new StatusError(422, [], 'Unknown project ID' + errorFlag);

        const nextList = await lists.findByPid(nextId, {
            attributes: ['id', 'rank']
        });

        console.log('NEXT LIST:', nextList);

        let rank = new Date().getTime();

        if(nextId !== 'end'){
            const surroundingLists = await lists.findAll({
                where: {
                    projectId: project.id,
                    rank: {
                        [Op.lte]: nextList.rank
                    }
                },
                order: ['rank'],
                limit: 2
            });

            console.log(surroundingLists);
        }

        res.send({
            success: true,
            message: 'Move list API',
            nextId,
            list_id,
            project_id
        });
    } catch(err){
        console.log('Error moving list:', err);
        sendError(res, err, 'Error moving list');
    }
}
