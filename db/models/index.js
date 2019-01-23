const db = require('../');

const users = require('./users')(db);

const projectStatuses = require('./project_statuses')(db);

const projects = require('./projects')(db, projectStatuses, users);

const projectUsers = require('./project_users')(db, projects, users);

const lists = require('./lists')(db, users, projects);

const tasks = require('./tasks')(db, users, projects, lists);

const taskCollaborators = require('./task_collaborators')(db, users, tasks);

const taskMessages = require('./task_messages')(db, users, tasks);

const timeTrackingStatuses = require('./time_tracking_statuses')(db);

const timeTracking = require('./time_tracking')(db, projects, timeTrackingStatuses, tasks, users);

module.exports = {
    lists,
    projects,
    projectStatuses,
    projectUsers,
    taskCollaborators,
    taskMessages,
    tasks,
    timeTracking,
    timeTrackingStatuses,
    users
}
