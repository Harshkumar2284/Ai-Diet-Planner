const express = require("express")
const port = process.env.PORT || 8080
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors({
   origin:"http://localhost:3000",
   credentials:true,
   methods:["GET","POST","PUT","DELETE"]
}))

app.use(require("./routes/authenticate"))

 app.listen(port,(req,res)=>{
    console.log("Server running..")
 })