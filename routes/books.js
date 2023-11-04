import express from "express"
const router = express.Router();


router.get('/:id', (req, res) => {
    res.send(`Carti ${req.params.id}`)
})

router.param('id', (req, res, next, id) => {
    console.log(id)
    next()
})

export default router;