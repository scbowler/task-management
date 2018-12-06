const router = require('express').Router();
const { createProject, getAllProjects } = require('../../controllers/projects');

router.get('/', getAllProjects);
router.post('/', createProject);

module.exports = router;
