//localhost:8080 
// then add this in json
// {
//     "token":1234
// }

import express from 'express';
const app = express();
app.use(express.json());

const auth = (req,res,next)=> {
    const token=req.body.token;
    if(token===1234)
        next();
    else{
        res.send("Access Denied")
    }
};

app.post("/", auth, (req,res)=>{
   res.send("Welcome User");
});

app.listen(8080, ()=>{
    console.log("server started");
});