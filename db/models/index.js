const db = require('../');

module.exports = {
    users: require('./users')(db)
}
