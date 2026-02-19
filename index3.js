import express from 'express'
const app=express()
app.listen(8080,()=>
    {
        console.log("Server started");
    });
app.get("/",(req,res)=>
    {
        console.log(req.url)//prints the url in terminal
        res.send("resonse from server for /")
    })    
app.get("/home",(req,res)=>
    {
        console.log(req.url)
        res.send("resonse from /home")
    })    
app.get("/home/page1",(req,res)=>
    {
        console.log(req.url)
        res.send("resonse from /home/page1")
    })        