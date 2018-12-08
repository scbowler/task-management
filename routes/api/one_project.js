const router = require('express').Router({ mergeParams: true });
const { requireBasicAuth } = require('../setup');
const { addListToProject, addTaskToProject, getListsTasks, getOneProject } = require('../../controllers/projects');

router.get('/', requireBasicAuth, getOneProject);

router.post('/lists', requireBasicAuth, addListToProject);

router.get('/lists/:list_id/tasks', requireBasicAuth, getListsTasks);
router.post('/lists/:list_id/tasks', requireBasicAuth, addTaskToProject);

module.exports = router;
