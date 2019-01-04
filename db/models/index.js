const db = require('../');

const users = require('./users')(db);

const projectStatuses = require('./project_statuses')(db);

const projects = require('./projects')(db, projectStatuses, users);

const projectUsers = require('./project_users')(db, projects, users);

const lists = require('./lists')(db, users, projects);

const tasks = require('./tasks')(db, users, projects, lists);

const taskMessages = require('./task_messages')(db, users, tasks);

module.exports = {
    lists,
    projects,
    projectStatuses,
    projectUsers,
    taskMessages,
    tasks,
    users
}
