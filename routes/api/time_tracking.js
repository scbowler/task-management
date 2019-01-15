const router = require('express').Router({mergeParams: true});
const { requireBasicAuth } = require('../setup');
const { getAll, newTimeTracking } = require('../../controllers/tasks').timeTracking;

router.get('/', requireBasicAuth, getAll);

router.put('/', requireBasicAuth, newTimeTracking);

module.exports = router;
