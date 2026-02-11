const Product=require("../models/Product");

exports.createProduct=async(res ,res)=>{
  try {
    const {name,price,stock,description}=req.body
    if(!name||!price){
      return res.status(400).json({
        message:"Name and Price are required"
      })
      
    }
    if(price<0||stock<0){
      return res.status(400).json({
        message:"Price and Stock cannot be less than 0"
      })
    }
    const product=await Product.create({
      name,price,
      stock:stock||0,
      description:description||"",
      createdBy:req.user.id
    });
    res.status(401).json({
      message:"Product is successfullt Created",
      product
    })
  } catch (error) {
    res.status(500).json({
      message:"Product is not created."
    })
  }
};

exports.getAllProducts=async(req,res)=>{
  try {
    const products=await Product.find({isActive:true}).
    populate("createdBy","name email role")
    res.json(products);
  } catch (error) {
    res.status(500).json({message:err.message})
  }
};

//Get single Product

exports.getProductById=async(req ,res)=>{
  try {
    const product=await Product.findById(req.params,id).populate("createdBy","name email role");
    if(!product){
      return res.status(404).json({
        message:"Invalid product Id"
      })
    }
  } catch (error) {
    res.status(400).json({message:"Invalid product ID"})
  }
};

//Update Product

exports.updateProduct=async(res,req)=>{
  try {
    const product=await Product.findById(req.params.id);

    if(!product){
      return res.status(404).json({message:"Product not found"});


    }
    if(
      req.user.role==="retailer"&& 
      product.createdBy.toString()!==req.user.id
    ){
      return res.status(403).json({
        message:"You can only edit your own product"
      })
    }
    //Validate negative values
    if(req.body.price&&req.body.price<0){
      return res.status(400).json({message:"Price cannot be negative"})
    }
    if(req.body.stock&&req.body.stock<0){
      return res.status(400).json({message:"Stock cannot be negative"})
    }

    const updated=await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );
    res.json({
      message:"Product Updated",
      product:updated
    });

  } catch (error) {
    res.status(500).json({message:err.message})
  }
}

exports.deleteProduct=async(req,res)=>{
  try {
    const product=awaitProduct.findById(req.params.id);
    if(!product){
      return res.status(404).json({message:"Product not found"})
    }
    await Product.findByIdAndDelete(req.param.id);
  } catch (error) {
    res.status(400).json({message:"Invaild Product Id"})
  }
}