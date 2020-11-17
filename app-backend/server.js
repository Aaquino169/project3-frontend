const express = require('express')

const app = express()

const mongoose = require('mongoose')

const port = 8000 

app.use(express.json())



//middleware for mongoose
mongoose.connect('mongodb://localhost:27017/store_db', { useNewUrlParser:true })
mongoose.connection.once('open', () => {
    console.log('connected to db')
})
mongoose.connection.on('error', err =>console.log(err.message))
mongoose.connection.on('disconnected', () =>console.log('mongo disconnected'))

app.listen(port, () => {
    console.log('app is running on port:',port)
})