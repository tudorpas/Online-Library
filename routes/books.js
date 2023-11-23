import express from "express"
const router = express.Router();


router.get('/:id', (req, res) => {
    res.send(`${req.params.id} books`)
})

router.param('id', (req, res, next, id) => {
    console.log(id)
    next()
})

export default router;