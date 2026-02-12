const Product = require("../models/Product");

// CREATE
exports.createProduct = async (req, res) => {
  try {
    // Basic validation to avoid crashes
    const { name, price, stock } = req.body;

    if (!name || price == null || stock == null) {
      return res.status(400).json({
        message: "name, price and stock are required"
      });
    }

    const product = await Product.create({
      name: req.body.name,
      description: req.body.description || "",
      price: req.body.price,
      stock: req.body.stock
      // NO createdBy for now
    });

    res.status(201).json({
      message: "Product created",
      product,
    });

  } catch (err) {
    console.error("CREATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ONE
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: "Invalid product ID" });
  }
};

// UPDATE
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product updated", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(400).json({ message: "Invalid product ID" });
  }
};
