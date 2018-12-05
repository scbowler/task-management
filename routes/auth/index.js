const router = require('express').Router();
const { requireBasicAuth, requireSignIn } = require('../setup');
const { jwtSignIn, userSignIn } = require('../../controllers/auth/authentication');
const { createAccount } = require('../../controllers/auth/create_account');

router.post('/create-account', createAccount);

router.post('/sign-in', requireSignIn, userSignIn);

router.get('/jwt-sign-in', requireBasicAuth, jwtSignIn);

module.exports = router;
