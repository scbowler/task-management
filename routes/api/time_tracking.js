const router = require('express').Router({mergeParams: true});
const { completeTimeTracking, getTimeTrackingList, getTotalTime, newTimeTracking } = require('../../controllers/tasks').timeTracking;

router.get('/', getTotalTime);

router.put('/', newTimeTracking);

router.patch('/:tracking_id', completeTimeTracking);

router.get('/list', getTimeTrackingList);

module.exports = router;
