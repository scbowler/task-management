const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');

module.exports = (db, projects) => {
    const Lists = db.define('lists', {
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
            type: Sequelize.INTEGER
        }
    },
    {
        paranoid: true
    });

    
    Lists.belongsTo(projects, { as: 'project' });

    Lists.findByPid = findByPid;

    return Lists;
}
