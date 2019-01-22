const Sequelize = require('sequelize');
const { findByPid, sumEach } = require('./interfaces');

module.exports = (db, projects, statuses, tasks, users) => {
    const TimeTracking = db.define('timeTracking', {
        elapsed: {
            allowNull: true,
            type: Sequelize.BIGINT(54)
        },
        end: {
            allowNull: true,
            type: Sequelize.BIGINT(54)
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
            type: Sequelize.BIGINT(54)
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
    TimeTracking.sumEach = sumEach;

    // TimeTracking.sync({force: true})

    return TimeTracking;
}
