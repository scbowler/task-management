const Sequelize = require('sequelize');
const { findByMid, getIdsByMids } = require('./interfaces');

module.exports = db => {
    const TimeTrackingStatuses = db.define('timeTrackingStatuses', {
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
        }
    },
        {
            paranoid: true
        });

    TimeTrackingStatuses.findByMid = findByMid;
    TimeTrackingStatuses.getIdsByMids = getIdsByMids;

    return TimeTrackingStatuses;
}
