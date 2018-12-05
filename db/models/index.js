const db = require('../');

const users = require('./users')(db);

const projectStatuses = require('./project_statuses')(db);

const projects = require('./projects')(db, projectStatuses, users);

module.exports = {
    projects,
    projectStatuses,
    users
}
