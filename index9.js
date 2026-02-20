//MIDDLEWARE
import express from 'express'
const app=express()
app.listen(8080,()=>
    {
        console.log("Server started")
    })
const logger = ()=>
    {

    } 
app.use(logger)    
app.get("/",(req,res)=>
    {
        //res.send("Hello World")

        // res.json({name:"John"})
        //sent as js object converts to json format
        
        res.send({name:"John"})
         //still converts to json only
    })  