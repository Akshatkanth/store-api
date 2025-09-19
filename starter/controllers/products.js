
//in static one we majorly test our api and see if it works, 
// then implement it to the one without the static
const getAllProductsStatic = async (req, res)=>{
    throw new Error('testing async errors')
    res.status(200).json({msg: 'products testing route'})
}

const getAllProducts = async (req, res)=>{
    res.status(200).json({msg: 'products route'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}