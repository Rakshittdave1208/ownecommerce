const express=require("express");
const controller=require("../controllers/cartController");

const router=express.Router();

//Add  To Cart

router.post("/add",controller.addToCart);
//view cart
router.get("/:userId",controller.getCart);
//Review one Item
router.delete("/:userId/:productId",controller.removeFromCart);
// Clear cart

router.delete("/clear/:userId",controller.clearCart);
module.exports=router;
