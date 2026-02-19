import express from 'express'
const app=express()
app.listen(8080,()=>
    {
        console.log("Server started");
    });
app.get("/",(req,res)=>
    {
        res.send("resonse from server for /")
    })    
app.get("/home",(req,res)=>
    {
        res.send("resonse from /home")
    })    
app.get("/home/page1",(req,res)=>
    {
        res.send("resonse from /home/page1")
    })        