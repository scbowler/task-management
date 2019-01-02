const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');

module.exports = (db, users, tasks) => {
    const TaskMessages = db.define('taskMessages', {
        message: {
            allowNull: true,
            type: Sequelize.STRING
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
        }
    },
        {
            paranoid: true
        });

    TaskMessages.belongsTo(tasks, { as: 'task' });
    TaskMessages.belongsTo(users, { as: 'author' });

    TaskMessages.findByPid = findByPid;

    return TaskMessages;
}
