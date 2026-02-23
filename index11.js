import express from 'express'
const app=express()
app.listen(8080,()=>console.log("Server started"))
//app.use(express.static("images"))

//app.use("/images",express.static("images")) 
//http://localhost:8080/images/download.jpg

app.use("/public",express.static("public")) 
