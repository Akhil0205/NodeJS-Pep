import express from 'express'
const userRouter=express.Router()
userRouter.get("/",(req,res)=>
    {
        res.send("Get req of users")
    })
userRouter.post("/",(req,res)=>
    {
        res.send("Post req of users")
    })  

export default userRouter 