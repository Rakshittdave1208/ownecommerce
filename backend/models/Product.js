const mongoose=require("mongoose");

const productSchema=new mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    description:String,
    price:{
      type:Number,
      required:true
    },
    stock:{
      type:Number,
      default:0
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      res:"UserProfile",
      required:true
    },
    isActive:{
      type:Boolean,
      default:true,
    }
  },
  {timestamps:true}
);
module.exports=mongoose.model("Product",productSchema);