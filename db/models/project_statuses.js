const Sequelize = require('sequelize');
const { findByMid } = require('./interfaces');

module.exports = (db) => {
    const ProjectStatuses = db.define('projectStatuses', {
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
        mid: {
            allowNull: false,
            type: Sequelize.STRING
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        }
    },
    {
        paranoid: true
    });

    ProjectStatuses.findByMid = findByMid;

    return ProjectStatuses;
}
