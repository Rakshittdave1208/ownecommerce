import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { addProduct } from "../services/api";

export default function AddProductForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await addProduct(form);
      onSuccess(); // 👈 IMPORTANT — tells table to refresh
      setForm({ name: "", description: "", price: 0, stock: 0 });
    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    }
  };

  return (
    <div className="p-4">
      <h3>Add Product</h3>

      <InputText name="name" value={form.name}
        placeholder="Name" onChange={handleChange} />
      <br /><br />

      <InputText name="description" value={form.description}
        placeholder="Description" onChange={handleChange} />
      <br /><br />

      <InputNumber value={form.price}
        placeholder="Price"
        onChange={(e) => setForm({ ...form, price: e.value })} />
      <br /><br />

      <InputNumber value={form.stock}
        placeholder="Stock"
        onChange={(e) => setForm({ ...form, stock: e.value })} />
      <br /><br />

      <Button label="Add Product" onClick={handleSubmit} />
    </div>
  );
}
