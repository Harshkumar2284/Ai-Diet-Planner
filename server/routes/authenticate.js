const express = require("express")
const router = express.Router()

router.get("/test", (req,res)=>{
    console.log("hi react")
    res.json("hello")
})

module.exports = router