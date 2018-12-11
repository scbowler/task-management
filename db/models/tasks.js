const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');

module.exports = (db, users, projects, lists) => {
    const Tasks = db.define('tasks', {
        description: {
            allowNull: true,
            type: Sequelize.STRING
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        rank: {
            allowNull: true,
            type: Sequelize.BIGINT
        }
    },
    {
        paranoid: true
    });

    Tasks.belongsTo(projects, { as: 'project' });
    Tasks.belongsTo(lists, { as: 'list' });
    Tasks.belongsTo(users, {as: 'createdBy'});

    Tasks.findByPid = findByPid;

    return Tasks;
}
