//        const users=
// [
// {id:1,name:"John",email:"j@gmail.com",role:"student"},
// {id:2,name:"Cathy",email:"c@gmail.com",role:"student"},
// {id:3,name:"Admin",email:"a@gmail.com",role:"admin"}
// ]  
//http://localhost:8080/    

//1 print the array
import express from 'express'
const app=express()
app.listen(8080,()=>console.log("Server started"))
const users=
[
{id:1,name:"John",email:"j@gmail.com",role:"student"},
{id:2,name:"Cathy",email:"c@gmail.com",role:"student"},
{id:3,name:"Admin",email:"a@gmail.com",role:"admin"}
]  
app.get("/",(req,res)=>
    {   
        res.json(users)
    })
//2 print at 8080/1 and print id:1    

app.get("/:id", (req, res) => {   
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)

    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ message: "User not found" })
    }
})

//add this to existing data

// {id:4,
// name:"Tanya",
// email:"t@gmail.com",
// role:"student"}

//in postman choose post then body->raw->json and paste the json data 

// const greet=(req,res,next)=>
//     {
//         console.log("Hello World")
//         next()
//     }
// app.use(greet)    
app.use(express.json())
//middleware to process req.body

app.post("/",(req,res)=>
    {
        //console.log(req.body)
        const user=req.body
        //we have convert it into js object to use req.body.name
        //we use app.use(express.json) for that

        //const user=req.body.name can be used only when its a js object
        //we cannot do it directly via postman
        users.push(user)
        res.json(users)
        //when we stop the server the new data goes away
        //the above 3 remain unchanged
        //in realtime we fetch from mongodb so data gets stored
    })

// app.delete("/:id",(req,res)=>
//     {
//         res.send("succesfully deleted")
//         //delete and return rest data
//         //use user.filter
// //pending
//     })    
app.delete("/users/:id", (req, res) => {
    const userId = Number(req.params.id);

    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    const deletedUser = users.splice(index, 1);

    res.json({
        message: "User deleted successfully",
        user: deletedUser[0]
    });
});    