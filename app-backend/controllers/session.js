const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users')

//login to seessions
sessions.post('/', (req,res) => {

    User.findOne({ username: req.body.username }, (err, foundUser) => {

        if (err) {
            console.log('problem with the db:', err)
        }else if (!foundUser) {
            console.log('no user with that username')
        }else{
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                // console.log(res)
                req.session.currentUser = foundUser
                console.log(req.session.currentUser)
            } else {
                console.log('password is incorrect')
            }
        }
    })
})

//logout of sessions

module.exports = sessions