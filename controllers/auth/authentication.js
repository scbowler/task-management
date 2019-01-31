const jwt = require('jwt-simple');
const { jwt: { secret } } = require('../../config');

function tokenForUser(user) {
    const ts = new Date().getTime();

    return jwt.encode({
        uid: user.id,
        ts: ts
    }, secret);
}

function userDataToSend(user) {
    return {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        pid: user.pid
    }
}

exports.tokenForUser = tokenForUser;
exports.userDataToSend = userDataToSend;

exports.userSignIn = async (req, res) => {
    const { user } = req;

    res.send({
        token: tokenForUser(user),
        user: userDataToSend(user)
    });
};

exports.jwtSignIn = function (req, res) {
    const { user } = req;

    res.send({
        user: userDataToSend(user)
    });
};

exports.verifyToken = function (req, res, next) {
    if (req.user.expired) return res.send(req.user);
    next();
}
