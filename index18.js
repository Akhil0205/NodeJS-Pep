import express from 'express'
const app=express()
const PORT=process.argv[2]
app.listen(PORT,()=>
    {
        console.log("server started")
    })
app.get("/",(req,res)=>
    {
        res.send(`This server is running on port${PORT}`)
    })    
