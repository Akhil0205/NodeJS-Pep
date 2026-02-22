//MIDDLEWARE
import express from 'express';
const app = express();
app.listen(8080);

const logger = (req,res,next)=> {
req.message = "This is  longer function"
//console.log(req.url)
next();
};

//app.use(logger);

app.get("/",logger, (req,res)=>{
   // res.end()
  // res.send("Hello World")
   // res.json({name:"Johm",age: 21})
   console.log(req.message);
   res.json(req.url);
});

app.get("/home", (req,res)=>{
 console.log(req.message);
   res.json(req.url);
   res.send("home")
});  
 
