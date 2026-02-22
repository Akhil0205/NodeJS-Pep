//localhost:8080/1234 ->display welcome message
//else ->accesss denied

import express from 'express';
const app = express();
const auth = (req,res,next)=> {
    if(req.url==="/1234")
        next()
    // if(id === "1234")
    //     next();
    else
        res.send("Access Denied");
};
app.use(auth)

// app.get("/:id", auth, (req,res)=>{
//    res.send("Welcome");
// });

app.get("/1234",(req,res)=>{
   res.send("Welcome");
});

app.listen(8080, ()=>{
    console.log("server started");
});



