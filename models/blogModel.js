const mongoose = require('mongoose')

const Blog = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    body: {
        type: String,
        required: [true, 'Please add body to blog']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {timestamps: true})

module.exports = mongoose.model('Blog', Blog)