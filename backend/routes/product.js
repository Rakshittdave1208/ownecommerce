const express = require("express");
const passport = require("passport");
const { authorize } = require("../middleware/roleMiddleware");
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

const router = express.Router();

// Public
router.get("/", getAllProducts);

// Admin + Retailer
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  authorize("admin", "retailer"),
  createProduct
);

// Only Admin delete
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin"),
  deleteProduct
);

module.exports = router;
