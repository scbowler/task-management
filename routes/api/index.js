const router = require('express').Router();
const { createAccount } = require('../../controllers/auth/create_account');

router.get('/test', (req, res) => {
    res.send('<h1>API Status [<span style="color: green">OK</span>]</h1>');
});



module.exports = router;
