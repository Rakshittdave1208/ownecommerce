import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AddProductForm from "../components/AddProductForm";
import ProductTable from "../components/ProductTable";
import { getProducts } from "../services/api";

export default function Product() {
  const [products, setProducts] = useState([]);

  // Fetch only once on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  // Log only when product count changes
  useEffect(() => {
    console.log("Product count changed:", products.length);
  }, [products.length]);

  // When new product is added
  const handleProductAdded = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <>
      <Navbar />

      <div className="p-4">
        <h2>Manage Products</h2>

        <AddProductForm onSuccess={handleProductAdded} />

        <ProductTable products={products} />
      </div>
    </>
  );
}
