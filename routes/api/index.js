const router = require('express').Router();
const { requireBasicAuth } = require('../setup');

router.get('/test', (req, res) => {
    res.send('<h1>API Status [<span style="color: green">OK</span>]</h1>');
});

router.use('/projects', requireBasicAuth, require('./projects'));

router.use('/tasks', requireBasicAuth, require('./tasks'));

module.exports = router;
