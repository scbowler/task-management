const router = require('express').Router({ mergeParams: true });
const { collaborators } = require('../../controllers/tasks');

router.get('/', collaborators.getCurrent);
router.get('/available', collaborators.getAvailable);

router.post('/', collaborators.add);

router.delete('/:collaborator_id', collaborators.delete);
router.patch('/:collaborator_id', collaborators.toggleLead);

module.exports = router;
