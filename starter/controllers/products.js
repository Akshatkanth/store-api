const Product = require('../models/product')


//in static one we majorly test our api and see if it works, 
// then implement it to the one without the static
const getAllProductsStatic = async (req, res)=>{
    const products = await Product.find({}).sort('-name price')
    res.status(200).json({products, nbhits: products.length})
}

const getAllProducts = async (req, res)=>{
    const {featured, company, name, sort} = req.query
    const queryObject = {} 
    

    //user can filter product from these three ifs: 
    if(featured){
        queryObject.featured = featured === 'true' ? true : false;
    }

    if(company){
        queryObject.company = company
    }

    if(name){
        queryObject.name = {$regex:name, $options: 'i'}
    }
    
    // console.log(queryObject);
    let result = Product.find(queryObject);
    if(sort){
        console.log(sort)
    }
    const products = await result;
    res.status(200).json({products, nbhits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic, 
}