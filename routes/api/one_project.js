const router = require('express').Router({ mergeParams: true });
const { requireBasicAuth } = require('../setup');
const { addListToProject, getOneProject } = require('../../controllers/projects');

router.get('/', requireBasicAuth, getOneProject);

router.post('/list', requireBasicAuth, addListToProject);

module.exports = router;
