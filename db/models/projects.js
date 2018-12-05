const Sequelize = require('sequelize');

module.exports = (db, projectStatuses, users) => {
    const Projects = db.define('Projects', {
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
        }
    }, 
    {
        paranoid: true
    });

    Projects.belongsTo(projectStatuses);
    Projects.belongsTo(users, { as: 'createdBy'});

    return Projects;
}
