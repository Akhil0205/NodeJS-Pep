import express from 'express'
const app=express()
app.listen(8080,()=>
    {
        console.log("Server started")
    })
// app.get("/",(req,res)=>
//     {
//         //console.log(req.headers)
//         console.log(req.headers.authorization)
//         res.send("Hello World")
//     })    

//we can write anything as arguments here instead of req and res
app.get("/",(a,b)=>
    {
        //console.log(req.headers)
        console.log(a.headers.authorization)
        b.send("Hello World")
    })  
//req is the variable name through which we pass the data to web server and access later
