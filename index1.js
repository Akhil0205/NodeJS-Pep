//npm init -y ->package.json installed
//to use import,export add "type":"module" in package.json
//previously it used require for that
//check express - npm list express
// to install - npm install epxress
//node modules folder will be installed
//delete node modules , then run npm install -> will download necessary dependencies
//console.log("Hello world")

import express from 'express'
const app=express()
app.listen(8080)