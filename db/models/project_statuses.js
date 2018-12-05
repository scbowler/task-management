const Sequelize = require('sequelize');

module.exports = (db) => {
    const ProjectStatuses = db.define('ProjectStatuses', {
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
        }
    },
    {
        paranoid: true
    });

    return ProjectStatuses;
}
