const Users = require('./users.models')
const Conversations = require('./conversations.models')
const Messages = require('./messages.models')
const Groups = require('./groups.models')
const GroupMembers = require('./groupMembers.models')

const initModels = () => {

    Users.hasMany(Messages)
    Messages.belongsTo(Users)

    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)


}

module.exports = initModels