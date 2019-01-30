const router = require('express').Router();
const { createProject, getAllProjects } = require('../../controllers/projects');

router.get('/', getAllProjects);
router.post('/', createProject);

router.use('/:project_id', require('./one_project'));

module.exports = router;
