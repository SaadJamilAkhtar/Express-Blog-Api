const mongoose = require('mongoose')

const User = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, 'please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    username: {
        type: String,
        required: [true, 'Please add a username']
    }
}, {timestamps: true})

module.exports = mongoose.model('User', User)