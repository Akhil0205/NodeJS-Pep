//choose bearer token in authorization and when the token is 1234 - display welcome
//else access denied
//use (req.headers.authorization)

// import express from 'express'
// const app=express()
// app.use(express.json())
// const auth = (req,res,next)=> {

//     const header = req.headers.authorization;
//     console.log(header);
//     // const token = header.split(" ")
//     const token = header.slice(7)
//     // if(token[1]==="1234"){
//     //     next();
//     // }
//     if(token==="1234") next()
//     else
//         res.send("Denied");
// };
// //app.use(auth)
// app.post("/",auth,(req,res)=>
//     {
//         res.send("Welcome User")
//     })
// app.get("/",auth,(req,res)=>{
//    res.send("Welcome User");
// });

// app.listen(8081, ()=>{
//     console.log("server started");
// });    

//working at 8081

//Method-2 using split
import express from "express"
const app = express()

app.use(express.json())
const auth=(req, res, next)=>{

    const BearerToken=req.headers.authorization

    const token=BearerToken.split(" ")

    if(token[1]==="1234"){
        next()  
    }
    else{
        return res.send("stopped")
    }
}

app.post("/", auth,(req, res)=>{
    res.send("Welcome User")
})

app.listen(8080,()=>
    {
        console.log("server started")
    })

