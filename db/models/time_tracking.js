const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');

module.exports = (db, projects, statuses, tasks, users) => {
    const TimeTracking = db.define('timeTracking', {
        elapsed: {
            allowNull: true,
            type: Sequelize.INTEGER
        },
        end: {
            allowNull: true,
            type: Sequelize.INTEGER
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        start: {
            allowNull: false,
            type: Sequelize.INTEGER
        }
    },
        {
            paranoid: true
        });

    TimeTracking.belongsTo(projects, { as: 'project' });
    TimeTracking.belongsTo(statuses, { as: 'status' });
    TimeTracking.belongsTo(tasks, { as: 'task' });
    TimeTracking.belongsTo(users, { as: 'user' });

    TimeTracking.findByPid = findByPid;

    return TimeTracking;
}
