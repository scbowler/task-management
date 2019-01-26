const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const { findByPid } = require('./interfaces');

module.exports = db => {
    const User = db.define('users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        color: {
            allowNull: false,
            type: Sequelize.STRING
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
            beforeCreate: async user => {
                const hash = await bcrypt.hash(user.password, 10);
                
                user.password = hash;
                user.email = user.email.toLowerCase();
            }
        },
        paranoid: true
    });

    User.prototype.comparePasswords = function(candidatePassword){
        return new Promise((resolve, reject) => {
            bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
                if (err) {
                    return reject(err);
                }
                resolve(isMatch);
            });
        });
    }

    User.findByPid = findByPid;

    return User;
}
