import express from 'express'
const app=express()
app.listen(8080,()=>console.log("Server started"))
const users=[]
app.post("/signup",(req,res)=>
    {
        
    })