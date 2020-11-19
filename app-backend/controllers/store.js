const express = require('express')
const store =  express.Router()
const Merch = require('../models/merch')

//index route
store.get('/', (req,res) => {

})

//delete route
store.delete('/:id', (req,res) => {

})

//create route
store.post('/', (req,res) => {

})

//update route
store.put('/:id', (req,res) => {

})





module.exports = store
