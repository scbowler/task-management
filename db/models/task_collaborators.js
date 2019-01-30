const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');

module.exports = (db, users, tasks) => {
    const TaskCollaborators = db.define('taskCollaborators', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        isLead: {
            allowNull: false,
            defaultValue: false,
            type: Sequelize.BOOLEAN
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    },
        {
            paranoid: false
        });

    TaskCollaborators.belongsTo(tasks, { as: 'task' });
    TaskCollaborators.belongsTo(users, { as: 'user' });

    TaskCollaborators.findByPid = findByPid;

    return TaskCollaborators;
}
