const router = require('express').Router();
const { requireBasicAuth } = require('../setup');
const { moveTask } = require('../../controllers/projects');

router.patch('/:task_id/move/:list_id', requireBasicAuth, moveTask);

module.exports = router;
