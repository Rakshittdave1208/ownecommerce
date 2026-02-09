const mongoose=require("mongoose");

const connectDB=async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connected");
  } catch (error) {
    console.log("Mongo Error",error)
    process.exit(1);
  }
}
module.exports=connectDB