const { Op } = require('sequelize');
const { lists, projects, tasks } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

module.exports = async (req, res) => {
    const { body: { nextId }, params: { list_id, task_id } } = req;

    console.log('Next ID:', nextId);

    try {
        if(!list_id) throw new StatusError(400, [], 'No destination list ID provided' + errorFlag);
        if(!task_id) throw new StatusError(400, [], 'No task ID provided' + errorFlag);

        const list = await lists.findByPid(list_id, {
            attributes: ['id']
        });

        if (!list) throw new StatusError(422, [], 'Unknown list ID provided' + errorFlag);

        const task = await tasks.findByPid(task_id);

        if (!task) throw new StatusError(422, [], 'Unknown task ID provided' + errorFlag);

        const ogListId = task.listId;

        const ogList = await lists.findByPk(ogListId, {
            attributes: ['pid']
        });

        if(!ogList) throw new StatusError(500, [], 'Error with task data' + errorFlag);

        let rank = new Date().getTime();

        if(nextId !== 'new' && nextId !== 'end'){
            console.log('NOT NEW LIST OR END OF LIST');
            const nextTask = await tasks.findByPid(nextId, {
                attributes: ['rank', 'listId']
            });

            const surroundingTasks = await tasks.findAll({
                attributes:['rank'],
                where: {
                    listId: nextTask.listId,
                    rank: {
                        [Op.lte]: nextTask.rank
                    }
                },
                order: ['rank'],
                limit: 2
            });

            if(surroundingTasks.length === 2){
                rank = centerRank(surroundingTasks[0].rank, surroundingTasks[1].rank);
            } else {
                rank = centerRank(0, surroundingTasks[0].rank);
            }
        }

        task.listId = list.id;
        task.rank = rank;

        await task.save();

        res.send({
            success: true,
            startingListId: ogList.pid
        });
    } catch(err){
        console.log('Moving error:', err);
        sendError(res, err, 'Error moving task');
    }
}

function centerRank(r1, r2){
    const rank = ((r1 + r2) / 2).toFixed();

    if(rank == r1 || rank == r2){
        return false;
    }

    return rank;
}
