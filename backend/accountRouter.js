import express from 'express'
const router = express.Router()

router.get("/balance", (req, res)=>{
    res.send("balance")
})


export const accountRoutes = router;