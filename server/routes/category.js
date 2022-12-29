import {Router} from "express";
import {getAllCategory, getCategoryById} from "../models/category.js";

const router = Router()

router.get('/', async (req, res) => {
    const categories = await getAllCategory()

    return res.json({
        categories,
    })
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    const category = await getCategoryById(id)

    return res.json(category)
})


export default router