const Product = require('../models/product')


//in static one we majorly test our api and see if it works, 
// then implement it to the one without the static
const getAllProductsStatic = async (req, res)=>{
    const products = await Product.find({
        featured:true})
    res.status(200).json({products})
}

const getAllProducts = async (req, res)=>{
    res.status(200).json({msg: 'products route'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}