import { useEffect, useState } from "react";
import API from "../services/api";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await API.get("/cart");
      setCart(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (id) => {
    try {
      await API.delete(`/cart/${id}`);
      fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="p-4">
      <h2>My Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div key={item._id} style={{ border: "1px solid gray", margin: 10 }}>
          <h4>{item.productId.name}</h4>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => removeItem(item._id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
