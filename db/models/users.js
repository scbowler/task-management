const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = db => {
    const User = db.define('users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true
        },
        firstName: {
            allowNull: false,
            type: Sequelize.STRING
        },
        lastName: {
            allowNull: false,
            type: Sequelize.STRING
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING(60)
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    }, {
        hooks: {
            beforeCreate: user => bcrypt.hash(user.password, 10).then(hash => user.password = hash)
        },
        paranoid: true
    });

    return User;
}
