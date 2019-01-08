const router = require('express').Router({ mergeParams: true });
const { requireBasicAuth } = require('../setup');
const { addListToProject, addTaskToProject, collaborators, getListsTasks, getOneProject, getSettings, moveList } = require('../../controllers/projects');

router.get('/', requireBasicAuth, getOneProject);

router.post('/lists', requireBasicAuth, addListToProject);
router.get('/lists/:list_id/tasks', requireBasicAuth, getListsTasks);
router.post('/lists/:list_id/tasks', requireBasicAuth, addTaskToProject);

router.patch('/lists/:list_id/move', requireBasicAuth, moveList);

router.get('/settings', requireBasicAuth, getSettings);

router.post('/collaborators/:user_id', requireBasicAuth, collaborators.add);
router.delete('/collaborators/:user_id', requireBasicAuth, collaborators.remove);

module.exports = router;
