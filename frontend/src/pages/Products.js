import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductTable from "../components/ProductTable";
import AddProductForm from "../components/AddProductForm";

export default function Products() {
  const [refreshFlag, setRefreshFlag] = useState(0);

  const refreshTable = () => {
    setRefreshFlag(prev => prev + 1);
  };

  return (
    <>
      <Navbar />
      <AddProductForm onSuccess={refreshTable} />
      <ProductTable refreshKey={refreshFlag} />
    </>
  );
}

