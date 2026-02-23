//json web token
//we want to create a string from an input
import express from 'express'
import jwt from 'jsonwebtoken'
const SECRET='lpu'
const app=express()
app.listen(8080,()=>console.log("Server started"))
const user=
{
    name:"John",
    email:"j@gmail.com",
    role:"student"
}
const token=jwt.sign(user,SECRET,{expiresIn:"1h"})
console.log(token)