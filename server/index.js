const express = require("express")
const port = 8080

const app = express();
 app.listen(port,(req,res)=>{
    console.log("Server running..")
 })