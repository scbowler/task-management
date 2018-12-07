const router = require('express').Router();
const { requireBasicAuth } = require('../setup');
const { createProject, getAllProjects, getOneProject } = require('../../controllers/projects');

router.get('/', requireBasicAuth, getAllProjects);
router.post('/', requireBasicAuth, createProject);

router.get('/:project_id', requireBasicAuth, getOneProject);

module.exports = router;
