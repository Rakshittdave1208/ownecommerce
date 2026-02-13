import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/")
    },
    {
      label: "Products",
      icon: "pi pi-box",
      command: () => navigate("/products")
    }
  ];

  return <Menubar model={items} />;
}
