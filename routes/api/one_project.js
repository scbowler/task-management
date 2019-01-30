const router = require('express').Router({ mergeParams: true });
const { requireBasicAuth } = require('../setup');
const projectAuth = require('../../middleware/project_auth');
const { addListToProject, addTaskToProject, collaborators, deleteListFromProject, getListsTasks, getOneProject, getSettings, moveList } = require('../../controllers/projects');

router.get('/', requireBasicAuth, projectAuth, getOneProject);

router.post('/lists', requireBasicAuth, projectAuth, addListToProject);

router.delete('/lists/:list_id', requireBasicAuth, projectAuth, deleteListFromProject);

router.get('/lists/:list_id/tasks', requireBasicAuth, projectAuth, getListsTasks);
router.post('/lists/:list_id/tasks', requireBasicAuth, projectAuth, addTaskToProject);

router.patch('/lists/:list_id/move', requireBasicAuth, moveList);

router.get('/settings', requireBasicAuth, getSettings);

router.post('/collaborators/:user_id', requireBasicAuth, projectAuth, collaborators.add);
router.delete('/collaborators/:user_id', requireBasicAuth, projectAuth, collaborators.remove);

module.exports = router;
