//http://localhost:8080/4/5
//sum should be printed
import express from 'express'
const app=express()
app.listen(8080,()=>
    {
        console.log("Server started")
    })
app.get("/:num1/:num2", (req, res) => {
    const a = Number(req.params.num1)
    const b = Number(req.params.num2)

    res.send(a + b)
})
app.get("/x/:num1/y/:num2/z/:num3", (req, res) => {
    //http://localhost:8080/x/4/y/5/z/1
    const a = Number(req.params.num1)
    const b = Number(req.params.num2)
    const c = Number(req.params.num3)
    res.send(a + b + c)
})

//localhost://8080/x/y

//localhost://8080/a/b/c/d or 1/2/3/4 or p/q/r/s
//it should return hello students

app.get("/:a/:b/:c/:d", (req, res) => {
    res.send("hello students")
})

//a/b/c/d fixed path
// /:a/:b/:c/:d -parameter

