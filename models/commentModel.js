const mongoose = require('mongoose')

const Comment = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a title']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Blog'
    }
}, {timestamps: true})

module.exports = mongoose.model('Comment', Comment)