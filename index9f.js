import express from 'express'
const app = express()

const jwt = Math.round(Math.random()*100000).toString()

app.use(express.json())

const auth = (req,res,next)=> {
    const val = req.headers.authorization;

    if(!val)
        return res.send("No token");

    const tokenval = val.split(" ");   // FIXED LINE

    if(tokenval[1] === jwt)
        next();
    else
        res.send("Unauthorized");
};

app.get("/", auth, (req,res)=>{
   res.send("Welcome");
});

app.post("/login",(req,res)=>{
    res.send(jwt)
})

app.listen(8085, ()=>{
    console.log("server started");
});

//random token generated then accessed