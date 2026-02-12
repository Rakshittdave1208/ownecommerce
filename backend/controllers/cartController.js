const Cart = require("../models/Cart");


exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId) {
      return res.status(400).json({
        message: "userId and productId are required"
      });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{ productId, quantity: quantity || 1 }],
      });
    } else {
      cart.items.push({ productId, quantity: quantity || 1 });
      await cart.save();
    }

    res.json({ message: "Added to cart", cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// VIEW CART 
exports.getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId })
      .populate("items.productId");

    res.json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// REMOVE ONE ITEM 
exports.removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();

    res.json({ message: "Item removed", cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CLEAR CART (no auth yet)
exports.clearCart = async (req, res) => {
  try {
    const { userId } = req.params;
    await Cart.deleteOne({ userId });
    res.json({ message: "Cart cleared" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
