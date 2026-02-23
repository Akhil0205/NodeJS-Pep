import products from '../models/productModel.js'
export const getProducts = (req,res)=>{
    res.json(products)
    //res.send("Get req of users")
}

export const createProduct = (req,res)=>{
    const newProduct=req.body
    products.push(newProduct)
    res.json(
        {
            message:"Product added",
            products
        })
}