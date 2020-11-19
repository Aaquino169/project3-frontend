const express = require('express')

const app = express()

const mongoose = require('mongoose')

const cors = require('cors')


const port = 8000

// const whitelist = ["http://localhost:8000"]
// const corsOptions = {
//     origin: (origin, callback) => {
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     }
// }

// app.use(cors(corsOptions))


app.use(express.json())



//middleware for mongoose
mongoose.connect('mongodb://localhost:27017/store_db', { useNewUrlParser:true })
mongoose.connection.once('open', () => {
    console.log('connected to db')
})
mongoose.connection.on('error', err =>console.log(err.message))
mongoose.connection.on('disconnected', () =>console.log('mongo disconnected'))

const storeController = require('./controllers/store')
app.use('/', storeController)

const usersController = require('./controllers/users')
app.use('/user', usersController)

app.listen(port, () => {
    console.log('app is running on port:',port)
})
