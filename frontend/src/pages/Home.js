import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getProducts } from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      
      <div className="p-4">
        <h2>All Products</h2>
        <DataTable value={products}>
          <Column field="name" header="Name" />
          <Column field="description" header="Description" />
          <Column field="price" header="Price" />
          <Column field="stock" header="Stock" />
        </DataTable>
      </div>
    </>
  );
}
