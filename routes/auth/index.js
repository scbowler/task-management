const router = require('express').Router();
const { createAccount } = require('../../controllers/auth/create_account');

router.get('/test', (req, res) => {
    res.send('<h1>AUTH Status [<span style="color: green">OK</span>]</h1>');
});

router.post('/create-account', createAccount);

module.exports = router;
