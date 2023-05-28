const db = require('../utils/database')

const { DataTypes } = require('sequelize')

const Conversations = require('./conversations.models')

const Users = require('./users.models')

const Messages = db.define('messages', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    conversationId: {
        type: DataTypes.UUID,
        field: 'conversation_id',
        references: {
            model: Conversations,
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.UUID,
        field: 'user_id',
        references: {
            model: Users,
            key: 'id'
        }
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})


module.exports = Messages