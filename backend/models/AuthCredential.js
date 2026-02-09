const mongoose=require("mongoose");

const authCredentialSchema=new mongoose.Schema(
  {
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"UserProfile",
      required:true,
    },
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true,
    },
    password:{
      type:String,
      required:true,
      minlength:7,
    }
  },
  {timestamps:true}
);

module.exports=mongoose.model("AuthCredentials",authCredentialSchema);
