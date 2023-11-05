const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    itemname: {
        type: String,
        required: true
    },

    itemauthor: {
        type: String,
        required: true
    },

    itemdescription: {
        type: String,
        required: true
    },

    pag: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
})
  
    const Post = mongoose.model('Post', articleSchema);
    module.exports = Post