const db = require('../');

module.exports = {
    user: require('./users')(db)
}
