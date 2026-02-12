const express = require("express");
const controller = require("../controllers/productController");

const router = express.Router();

router.get("/", controller.getAllProducts);
router.post("/", controller.createProduct);

module.exports = router;
