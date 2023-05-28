const db = require('../utils/database')

const { DataTypes } = require('sequelize')

const Groups = require('./groups.models')

const Users = require('./users.models')

const GroupMembers = db.define('groupMembers', {
    groupID: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'group_id',
        references: {
            key: 'id',
            model: Groups
        }
    },
    userID: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
})

module.exports = GroupMembers