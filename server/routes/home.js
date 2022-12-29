import {Router} from "express";

const router = Router()

router.get('/', (req, res) => {
    return res.json({
        name: 'mg mg'
    })
})


export default router