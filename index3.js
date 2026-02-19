import express from 'express'
const app=express()
app.listen(8080,()=>
    {
        console.log("Server started");
    });
app.get("/",(req,res)=>
    {
        console.log(req.url)//prints the url in terminal
        res.send("resonse from server for /")
    })    
app.get("/home",(req,res)=>
    {
        console.log(req.url)
        res.send("resonse from /home")
    })    
app.get("/home/page1",(req,res)=>
    {
        console.log(req.url)
        
        console.log(req.method)
        //prints method in console
        
        console.log(req.body)
        //shows undefined cause there is no body message
        //returns when some data is submitted by client
        
        console.log(req.headers.authorization)
        //epmty as no header is there
        
        res.send("resonse from /home/page1")
    })        