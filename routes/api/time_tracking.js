const router = require('express').Router({mergeParams: true});
const { completeTimeTracking, getAll, newTimeTracking } = require('../../controllers/tasks').timeTracking;

router.get('/', getAll);

router.put('/', newTimeTracking);

router.patch('/:tracking_id', completeTimeTracking);

module.exports = router;
