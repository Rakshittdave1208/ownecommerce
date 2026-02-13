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

  const handleSubmit = async () => {
    try {
      const res = await addProduct(form);

      onSuccess(res.data);   // pass created product to parent

      setForm({
        name: "",
        description: "",
        price: 0,
        stock: 0,
      });

    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    }
  };

  return (
    <div className="mb-4">
      <h4>Add Product</h4>

      <InputText
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="mr-2"
      />

      <InputText
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        className="mr-2"
      />

      <InputNumber
        placeholder="Price"
        value={form.price}
        onValueChange={(e) =>
          setForm({ ...form, price: e.value })
        }
        className="mr-2"
      />

      <InputNumber
        placeholder="Stock"
        value={form.stock}
        onValueChange={(e) =>
          setForm({ ...form, stock: e.value })
        }
        className="mr-2"
      />

      <Button label="Add" onClick={handleSubmit} />
    </div>
  );
}
