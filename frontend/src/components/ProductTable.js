import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function ProductTable({ products }) {
  return (
    <div>
      <DataTable value={products} emptyMessage="No products available">
        <Column field="name" header="Name" />
        <Column field="description" header="Description" />
        <Column field="price" header="Price" />
        <Column field="stock" header="Stock" />
      </DataTable>
    </div>
  );
}


