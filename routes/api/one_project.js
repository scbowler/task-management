const router = require('express').Router({ mergeParams: true });
const projectAuth = require('../../middleware/project_auth');
const { addListToProject, addTaskToProject, collaborators, deleteListFromProject, getListsTasks, getOneProject, getSettings, moveList } = require('../../controllers/projects');

router.get('/', projectAuth, getOneProject);

router.post('/lists', projectAuth, addListToProject);

router.delete('/lists/:list_id', projectAuth, deleteListFromProject);

router.get('/lists/:list_id/tasks', projectAuth, getListsTasks);
router.post('/lists/:list_id/tasks', projectAuth, addTaskToProject);

router.patch('/lists/:list_id/move', projectAuth, moveList);

router.get('/settings', projectAuth, getSettings);

router.post('/collaborators/:user_id', projectAuth, collaborators.add);
router.delete('/collaborators/:user_id', projectAuth, collaborators.remove);

module.exports = router;
