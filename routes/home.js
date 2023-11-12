const express = require('express');
const router = express.Router();
const path = require('path');
const Post = require("./../models/post.js")

let posts = [];


function findPostbyID(id) {
  return index = posts.findIndex((post) => {
    return post.id == id;
  });
}


const middle = express.urlencoded({
  extended: false,
  limit: 10000,
  parameterLimit: 7
})

router.post('/new', middle, async (req, res) =>{
  const payload = req.body;
  console.log(payload)
  if(!payload){
    return res.status(400).send("Error!")
  }
  try{
    await Post.create(payload)
    res.redirect("/")

    } catch (err) {
      res.redirect("/")
    }
});

router.post('/edit', middle, async ( req, res ) => {
    const payload = req.body;
    if (!payload) {
      return res.status(400).send("Failed");
    }
    await Post.updateOne({_id: payload.id}, payload);
    res.redirect("/");
  });

router.delete('/:id',async ( req, res ) => {
  await Post.findByIdAndDelete(req.params.id)
  res.redirect("/");
});

router.get('/', async (req, res) => {
  const posts = await Post.find().sort({
    date: 'desc'
  })
  res.render('home.ejs', {data: posts})
  console.log(posts)
})

router.get('/:category', async (req, res) => {
  const categoryPosts = await Post.find({category: req.params.category[0].toLowerCase() + req.params.category.slice(1)}).sort({
    createdAt: 'desc'
  });
  res.render('../views/home.ejs', {data: categoryPosts})
})

module.exports.router = router;     