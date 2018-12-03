const passport = require('passport');
const { basicAuth } = require('../middleware/auth');
const { authHeader } = require('../config').jwt;
require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

exports.requireBasicAuth = basicAuth(authHeader);
exports.requireSignIn = passport.authenticate('local', { session: false });
