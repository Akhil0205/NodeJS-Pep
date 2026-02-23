import express from 'express'
import  productRouter from './routes/productRoutes.js'
import userRouter  from './routes/userRoutes.js'
const app=express()
app.use(express.json())
app.listen(8080,()=>console.log("Server started"))

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)



