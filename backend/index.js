const express = require('express')
const mongoose = require('mongoose')

const postRoute = require('./Routes/posts')

const multer = require('multer')
const path = require('path')
const app = express()

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("connected to mongo")
}).catch(err=>{
    console.log(err)
})
app.use(express.json())
app.use("/images",express.static(path.join(__dirname,"/images")))
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
})
const upload = multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded")
})



app.use("/api/posts",postRoute)


app.listen('5000',()=>{
    console.log("Running")
})