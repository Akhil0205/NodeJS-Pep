//sending status code 
import express from 'express'
const app=express()
app.get("/",(req,res)=>
    {
        // res.json({message:"Hello world"})
        res.status(201).json({message:"Hello world"})
        //sending status as well manually
    })
app.listen(8080,()=>
    {
        console.log("server started")
    })