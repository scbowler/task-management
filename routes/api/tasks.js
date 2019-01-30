const router = require('express').Router();
const { deleteTask, getSingleTask, moveTask, updateTask } = require('../../controllers/tasks');
const { getRunning } = require('../../controllers/tasks').timeTracking;

router.get('/time-tracking', getRunning);
router.use('/:task_id/time-tracking', require('./time_tracking'));

router.use('/:task_id/collaborators', require('./task_collaborators'));

router.get('/:task_id', getSingleTask);
router.delete('/:task_id', deleteTask);

router.patch('/:task_id/move/:list_id', moveTask);
router.patch('/:task_id/:field', updateTask);

module.exports = router;
