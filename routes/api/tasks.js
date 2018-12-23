const router = require('express').Router();
const { requireBasicAuth } = require('../setup');
const { getSingleTask, moveTask, updateDescription } = require('../../controllers/tasks');

router.get('/:task_id', getSingleTask);

router.patch('/:task_id/move/:list_id', requireBasicAuth, moveTask);
router.patch('/:task_id/description', requireBasicAuth, updateDescription);

module.exports = router;
