const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const { users } = require('../db/models');
const { secret, tokenExpire } = require('../config').jwt;

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
    try {
        email = email.toLowerCase();

        let foundUser = await users.findOne({ where: { email } });

        if (!foundUser) return done(null, false);

        const isMatch = await foundUser.comparePasswords(password);

        if (!isMatch) return done(null, false);

        done(null, foundUser);
    } catch (err) {
        done(err);
    };
});

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        const now = new Date().getTime();

        if (payload.ts + tokenExpire < now) {
            return done(null, { expired: true, msg: 'Token has expired. Please sign back in.' });
        }

        const foundUser = await users.findByPk(payload.uid);

        if (!foundUser) return done(null, false);

        done(null, foundUser);
    } catch (err) {
        console.log('Error finding user in JWTLogin', err.message);
        done(null, false);
    };
});

passport.use(jwtLogin);
passport.use(localLogin);
