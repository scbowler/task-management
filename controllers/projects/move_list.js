const { Op } = require('sequelize');
const { lists } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { centerRank } = require('../../helpers/general');

module.exports = async (req, res) => {
    const { body: { nextId }, list: listToMove, project } = req;

    try {
        if(!nextId) throw new StatusError(400, [], 'Missing next list ID' + errorFlag);

        if(nextId !== listToMove.pid){

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
        sendError(res, err, 'Error moving list');
    }
}
