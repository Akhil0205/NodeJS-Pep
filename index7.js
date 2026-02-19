import express from 'express'
const app=express()
app.listen(8080,()=>console.log("Server started"))
// app.get("/",(req,res)=>
//     {
//         const user={
//             name:"John",
//             email:"j@gmail.com",
//             role:"student"
//         };
//         res.json(user)
//         //response will be in jason format only
//     })    

app.get("/",(req,res)=>
    {
       const users=
[
{id:1,name:"John",email:"j@gmail.com",role:"student"},
{id:2,name:"Cathy",email:"c@gmail.com",role:"student"},
{id:3,name:"Admin",email:"a@gmail.com",role:"admin"}
]   
        res.json(users)
        //response will be in jason format only
    })  
 
//http://localhost:8080/    