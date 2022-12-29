import {Router} from "express";
import {getAllCategory} from "../models/category.js";

const router = Router()

router.get('/', async (req, res) => {
    const categories = await getAllCategory()

    return res.json({
        categories,
    })
})

router.get('/:id', (req, res) => {
    return res.json(req.params)
})


export default router