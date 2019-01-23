const router = require('express').Router();
const { requireBasicAuth } = require('../setup');
const { deleteTask, getSingleTask, moveTask, updateTask } = require('../../controllers/tasks');
const { getRunning } = require('../../controllers/tasks').timeTracking;

router.get('/time-tracking', requireBasicAuth, getRunning);
router.use('/:task_id/time-tracking', require('./time_tracking'));

router.get('/:task_id', requireBasicAuth, getSingleTask);
router.delete('/:task_id', requireBasicAuth, deleteTask);

router.patch('/:task_id/move/:list_id', requireBasicAuth, moveTask);
router.patch('/:task_id/:field', requireBasicAuth, updateTask);

module.exports = router;
