const db = require('../');

const users = require('./users')(db);

const projectStatuses = require('./project_statuses')(db);

const projects = require('./projects')(db, projectStatuses, users);

const lists = require('./lists')(db, users, projects);

const tasks = require('./tasks')(db, users, projects, lists);

module.exports = {
    lists,
    projects,
    projectStatuses,
    tasks,
    users
}
