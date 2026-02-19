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

    res.send(String(a + b))
})