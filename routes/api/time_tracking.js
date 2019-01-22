const router = require('express').Router({mergeParams: true});
const { requireBasicAuth } = require('../setup');
const { completeTimeTracking, getAll, getRunning, newTimeTracking } = require('../../controllers/tasks').timeTracking;

router.get('/', requireBasicAuth, getAll);

router.put('/', requireBasicAuth, newTimeTracking);

router.patch('/:tracking_id', requireBasicAuth, completeTimeTracking);

module.exports = router;
