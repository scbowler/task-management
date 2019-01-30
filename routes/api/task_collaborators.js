const router = require('express').Router({ mergeParams: true });
const { requireBasicAuth } = require('../setup');
const { collaborators } = require('../../controllers/tasks');

router.get('/', requireBasicAuth, collaborators.getCurrent);
router.get('/available', requireBasicAuth, collaborators.getAvailable);

router.post('/', requireBasicAuth, collaborators.add);

router.delete('/:collaborator_id', requireBasicAuth, collaborators.delete);
router.patch('/:collaborator_id', requireBasicAuth, collaborators.toggleLead);

module.exports = router;
