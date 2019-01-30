const router = require('express').Router();
const { requireBasicAuth } = require('../setup');
const { createProject, getAllProjects } = require('../../controllers/projects');

router.get('/', requireBasicAuth, getAllProjects);
router.post('/', requireBasicAuth, createProject);

router.use('/:project_id', requireBasicAuth, require('./one_project'));

module.exports = router;
