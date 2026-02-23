import express from 'express'
const app=express()
app.listen(8080,()=>console.log("Server started"))
const users=[] 
app.use(express.json())
app.post("/signup",(req,res)=>
    {
        const body=req.body;
        users.push(body)
        res.json(users)
    })
app.get("/users",(req,res)=>
    {
        res.json(users)
    })    