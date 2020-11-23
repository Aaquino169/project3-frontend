const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {type:String, require:true},
    username: {type:String, require:true},
    password: {type:String, require:true},
    cart: []
})

const Users = mongoose.model('Users', userSchema)
module.exports = Users