const mongoose = require("mongoose")
const userStats = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("userStats",userStats)