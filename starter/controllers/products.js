const Product = require('../models/product')


//in static one we majorly test our api and see if it works, 
// then implement it to the one without the static
const getAllProductsStatic = async (req, res)=>{
    const products = await Product.find({
        name:'vase table',
    })
    res.status(200).json({products, nbhits: products.length})
}

const getAllProducts = async (req, res)=>{
    const products = await Product.find(req.query);
    res.status(200).json({})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic, 
}