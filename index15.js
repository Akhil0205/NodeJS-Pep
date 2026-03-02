//we import here from index14
import express from 'express'
import jwt from 'jsonwebtoken'
const app=express()
const SECRET="lpu"
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiakBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzMzg4MiwiZXhwIjoxNzcxODM3NDgyfQ.WAd8aoUlBtFHGFT4qlwQlRGjG1pBfzZiBV0Ctcq2nbE"
const user=jwt.verify(token,SECRET)
console.log(user)

//iat - issued at
//exp - expires at
