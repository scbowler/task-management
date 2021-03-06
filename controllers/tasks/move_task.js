const { Op } = require('sequelize');
const { lists, tasks } = require('../../db/models');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');
const { centerRank } = require('../../helpers/general');

module.exports = async (req, res) => {
    const { body: { nextId }, io, task, list } = req;

    try {
        const ogListId = task.listId;

        const ogList = await lists.findByPk(ogListId, {
            attributes: ['pid']
        });

        if(!ogList) throw new StatusError(500, [], 'Error with task data' + errorFlag);

        let rank = new Date().getTime();

        if(nextId !== 'new' && nextId !== 'end'){
            const nextTask = await tasks.findByPid(nextId, {
                attributes: ['rank', 'listId']
            });

            const surroundingTasks = await tasks.findAll({
                attributes:['rank', 'name'],
                where: {
                    listId: nextTask.listId,
                    rank: {
                        [Op.lte]: nextTask.rank
                    }
                },
                order: [['rank', 'DESC']],
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

        const listsToUpdate = [ogList.pid];

        if(ogList.pid !== list.pid){
            listsToUpdate.push(list.pid);
        }

        io.of(`/project-${task.project.pid}`).emit('update-lists', {
            projectId: task.project.pid,
            lists: listsToUpdate
        });

        res.send({
            success: true,
            startingListId: ogList.pid
        });
    } catch(err){
        sendError(res, err, 'Error moving task');
    }
}
