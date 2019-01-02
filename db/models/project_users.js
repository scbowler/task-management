const Sequelize = require('sequelize');

module.exports = (db, projects, users) => {
    const ProjectUsers = db.define('projectUsers', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
    },
        {
            paranoid: true
        });

    ProjectUsers.belongsTo(projects, { as: 'project' });
    ProjectUsers.belongsTo(users, { as: 'user' });

    return ProjectUsers;
}
