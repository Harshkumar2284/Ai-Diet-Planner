const express = require("express")
const router = express.Router()
const userData = require("../schema/UserData")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "This is a secret"


// REGISTER API
router.post("/register", async (req, res) => {
    const { user, pass } = req.body
    const check = await userData.findOne({ username: user })
    if (check) {
        res.json("Username already exists")
    } else {
        try {
            const hash = await bcrypt.hash(pass, 10)
            const newUser = new userData({
                username: user,
                password: hash
            })
            await newUser.save()
            res.json("Account Registered")
        } catch (error) {
            res.json(error)
        }
    }
})

// LOGIN API
router.post("/login",async(req,res)=>{
    const {user,pass} =req.body
    const check = await await userData.findOne({username:user})
    if(check){
        const passCheck = await bcrypt.compare(pass,check.password)
        if(passCheck){
            const payload = {
                username:user
            }
            const token = jwt.sign(payload,secret)
            res.json(token)
        }
        else{
            res.json("Invalid credentials")
        }
    }else{
        res.json("Invalid credentials")
    }
})


module.exports = router