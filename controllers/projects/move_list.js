const { Op } = require('sequelize');
const { lists, projects } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { centerRank } = require('../../helpers/general');

module.exports = async (req, res) => {
    const { body: { nextId }, params: { list_id, project_id } } = req;
    try {
        if(!nextId) throw new StatusError(400, [], 'Missing next list ID' + errorFlag);

        if(nextId !== list_id){
            const project = await projects.findByPid(project_id, {
                attributes: ['id']
            });

            if (!project) throw new StatusError(422, [], 'Unknown project ID' + errorFlag);

            const listToMove = await lists.findByPid(list_id, {
                attributes: ['id', 'rank']
            });

            if (!listToMove) throw new StatusError(422, [], 'Unknown list to move');

            let rank = new Date().getTime();

            if (nextId !== 'end') {
                const nextList = await lists.findByPid(nextId, {
                    attributes: ['id', 'name', 'rank']
                });

                if (!nextList) throw new StatusError(422, [], 'Unable to find adjacent list' + errorFlag);

                const surroundingLists = await lists.findAll({
                    attributes: ['name', 'rank'],
                    where: {
                        projectId: project.id,
                        rank: {
                            [Op.lte]: nextList.rank
                        }
                    },
                    order: [['rank', 'DESC']],
                    limit: 2
                });

                if (surroundingLists.length === 2) {
                    rank = centerRank(surroundingLists[0].rank, surroundingLists[1].rank);
                } else {
                    rank = centerRank(0, surroundingLists[0].rank);
                }
            }
            listToMove.rank = rank;
            await listToMove.save();
        }

        res.send({
            success: true
        });
    } catch(err){
        console.log('Error moving list:', err);
        sendError(res, err, 'Error moving list');
    }
}
