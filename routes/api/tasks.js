const router = require('express').Router();
const { requireBasicAuth } = require('../setup');
const { getSingleTask, moveTask, updateTask } = require('../../controllers/tasks');

router.get('/:task_id', getSingleTask);

router.patch('/:task_id/move/:list_id', requireBasicAuth, moveTask);
router.patch('/:task_id/:field', requireBasicAuth, updateTask);

module.exports = router;
