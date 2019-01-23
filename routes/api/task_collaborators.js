const router = require('express').Router({ mergeParams: true });
const { requireBasicAuth } = require('../setup');
const { collaborators } = require('../../controllers/tasks');

router.get('/available', requireBasicAuth, collaborators.getAvailable);

module.exports = router;
