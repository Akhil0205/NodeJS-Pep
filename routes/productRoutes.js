import express from 'express'
const productRouter=express.Router()
productRouter.get("/",(req,res)=>
    {
        res.send("Get req of products")
    })
productRouter.post("/",(req,res)=>
    {
        res.send("Post req of products")
    })
export default productRouter  