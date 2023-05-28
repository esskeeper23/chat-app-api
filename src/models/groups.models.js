const db = require('../utils/database')

const { DataTypes } = require('sequelize')

const Groups = db.define('groups', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    groupName: {
        type: DataTypes.STRING,
        field: 'group_name'
    }
})


module.exports = Groups
