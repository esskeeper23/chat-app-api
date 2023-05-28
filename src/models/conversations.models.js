const db = require('../utils/database')

const { DataTypes } = require('sequelize')

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    conversationName: {
        type: DataTypes.STRING
    }
})

module.exports = Conversations