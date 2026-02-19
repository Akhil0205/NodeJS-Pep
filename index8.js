import express from 'express'
const app=express()
app.listen(8080,()=>console.log("Server started"))
const users=
[
{id:1,name:"John",email:"j@gmail.com",role:"student"},
{id:2,name:"Cathy",email:"c@gmail.com",role:"student"},
{id:3,name:"Admin",email:"a@gmail.com",role:"admin"}
]  
app.get("/",(req,res)=>
    {   
        res.json(users)
    })