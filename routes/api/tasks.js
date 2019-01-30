const router = require('express').Router();
const projectAuth = require('../../middleware/project_auth');
const { deleteTask, getSingleTask, moveTask, updateTask } = require('../../controllers/tasks');
const { getRunning } = require('../../controllers/tasks').timeTracking;

router.get('/time-tracking', getRunning);
router.use('/:task_id/time-tracking', require('./time_tracking'));

router.use('/:task_id/collaborators', require('./task_collaborators'));

router.get('/:task_id', projectAuth, getSingleTask);
router.delete('/:task_id', projectAuth, deleteTask);

router.patch('/:task_id/move/:list_id', projectAuth, moveTask);
router.patch('/:task_id/:field', projectAuth, updateTask);

module.exports = router;
