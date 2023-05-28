const express = require('express')
const cors = require('cors')


const db = require('./utils/database')

//? Files
const {port} = require('./config')
//* Routes



const initModels = require('./models/initModels')


//? Initial configs
const app = express()

app.use(express.json())

app.use(cors())

db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log('Error authenticating database', err)
    })


db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log('Error syncing database', err)
    })

initModels()

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users`
    })
})


