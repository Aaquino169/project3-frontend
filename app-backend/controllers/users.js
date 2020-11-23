const express = require('express')
const bcrypt = require('bcrypt')
const user = express.Router()
const Users = require('../models/users')
const Merch = require('../models/merch')

//create route
user.post('/new', async (req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    Users.create( req.body, (err, createdUser) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('User Created:', createdUser )
        res.status(200).send(createdUser)
    })
})

// user.put('/addToCart/:id', async (req/res) => {
//     try {
//         const targetMerch = await Merch.findById(req.params.id)
//         Users.cart.push(targetMerch)

//     } catch (error) {
        
//     }
// })

// user.put('/addToCart/:id', async (req/res) => {
    
// })


module.exports = user
