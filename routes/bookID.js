const express = require('express');
const router = express.Router();
const path = require('path');
const Post = require('../models/post.js')

router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render('../views/book.ejs', {data: post})
})



module.exports = router;