import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getProducts } from "../services/api";

export default function ProductTable({ refreshKey }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log("Products from backend:", res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("API error:", err));
  }, [refreshKey]);   // 🔹 IMPORTANT CHANGE

  return (
    <div className="p-4">
      <h2>Products</h2>
      <DataTable value={products}>
        <Column field="name" header="Name" />
        <Column field="description" header="Description" />
        <Column field="price" header="Price" />
        <Column field="stock" header="Stock" />
      </DataTable>
    </div>
  );
}

