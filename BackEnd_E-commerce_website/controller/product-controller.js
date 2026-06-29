const product = require("../model/product.schema");



const getProducts = async(req,res)=>{
    try{
        const products = await product.find({});

        res.status(200).json(products);

    }catch(err){
        res.status(500).json({message : err.message});
    }
}


// show product by id
const getProductById = async(req,res)=>{
    try{
        const id = req.params.id;
        const productObj = await product.findOne({ 'id': id })

        res.status(200).json(productObj);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}



module.exports = {getProducts, getProductById};