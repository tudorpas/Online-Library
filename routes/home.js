import express from "express";
const router = express.Router();

let posts = [];

const middle = express.urlencoded({
  extended: false,
  limit: 10000,
  parameterLimit: 4
})

router.post('/new', middle, (req, res) =>{
  const payload = req.body;
  if(!payload){
    return res.status(400).send("Error!")
  }
  posts.push(payload);
  res.redirect("http://localhost:3000/")
  console.log(posts);
})

router.get('/', (req, res) => {
  res.render('home.ejs', {data: posts})
})

export default router;    