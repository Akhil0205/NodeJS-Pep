import express from 'express'
const app=express()
app.listen(8080,()=>console.log("Server started"))
// app.get("/",(req,res)=>
//     {
//         res.send("Hello World")
//     })    
// app.get("/:id",(req,res)=>
//     {
//         console.log(req.url)
//         console.log(req.params)
//         res.send(req.params.id)
//     })  

app.get("/:id/:email",(req,res)=>
    {
        console.log(req.url)
        console.log(req.params)
        res.send(req.params.id+req.params.email)
    })    
app.get("/id/:id/email/:email",(req,res)=>
    {
        //http://localhost:8080/id/j1/email/john@gmail.com
        console.log(req.url)
        console.log(req.params)
        res.send(req.params.id+req.params.email)
    })    
app.get("/home",(req,res)=>
    {
        res.send("Hello World")
    })
//this returns home instead of hello world as the first route is running and 
//when we pass /home , it returns
