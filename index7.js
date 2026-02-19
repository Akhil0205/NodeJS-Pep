import express from 'express'
const app=express()
app.listen(8080,()=>console.log("Server started"))
app.get("/",(req,res)=>
    {
        const user={
            name:"John",
            email:"j@gmail.com",
            role:"student"
        };
        res.json(user)
        //response will be in jason format only
    })    