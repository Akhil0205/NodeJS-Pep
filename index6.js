import express from 'express'
const app=express()
app.listen(8080,()=>
    {
        console.log("Server started")
    })
// app.get("/",(req,res)=>
//     {
//         res.send()
//         //if we dont close it will run infinitely
//         //status 200 means success

//     })    
app.get("/:name",(req,res)=>
    
    {
        res.send("Hello"+req.params.name)
    })
 //http://localhost:8080/john
//app.get("/name/:name",()={})    


//earlier we used query string    
//http://localhost:8080/?name=John
//app.get("/",()={})  

    
app.get("/",(req,res)=>
    //http://localhost:8080/?name=Cathy&age=21
    {
    res.send("Hello"+req.query.name+req.query.age)
    }
    )    