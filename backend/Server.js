const express=require("express")
const server=express();
const port=4000
const conectDb=require("./config/db")
const bodyparse=require("body-parser")
const studentrouter=require("./router/student")
const cros=require('cors')

server.use(cros())

server.use(bodyparse.json())

server.use("/api/v1",studentrouter)


conectDb();

server.listen(4000,(req,res)=>{
    console.log(`Server is Running ${port}`)
})