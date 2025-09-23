const mongoose = require("mongoose")
const connectionStr = "mongodb+srv://harshkumar:22842284@minorproject.tpb8d0n.mongodb.net/?retryWrites=true&w=majority&appName=MinorProject"

const connectDb = async()=>{
    try {
        await mongoose.connect(connectionStr)
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb