const express = require("express")
<<<<<<< HEAD
const port = 5000;

=======
const port = process.env.PORT || 8080
>>>>>>> 1cb819f386a43ac854926e7edbe6514c2688389f
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