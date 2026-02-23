import users from '../models/userModel.js'
export const getUsers = (req,res)=>{
    res.json(users)
    //res.send("Get req of users")
}

export const createUser = (req,res)=>{
    const newUser=req.body
    users.push(newUser)
    res.json(
        {
            message:"User added",
            users
        })
}