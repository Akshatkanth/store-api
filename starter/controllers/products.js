const Product = require('../models/product')


//in static one we majorly test our api and see if it works, 
// then implement it to the one without the static
const getAllProductsStatic = async (req, res)=>{
    const products = await Product.find({
        page:'2',
    })
    res.status(200).json({products, nbhits: products.length})
}

const getAllProducts = async (req, res)=>{
    const {featured} = req.qeury
    const queryObject = {} 
    
    if(featured){
        queryObject.featured = featured === 'true' ? true : false;
    }

    console.log(queryObject);
    const products = await Product.find(queryObject);
    res.status(200).json({products, nbhits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic, 
}