import { Link, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";

export default function Navbar() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const items = [
    {
      label: "Home",
      command: () => navigate("/")
    },

    // Products visible to admin & retailer
    ...(role === "admin" || role === "retailer"
      ? [
          {
            label: "Products",
            command: () => navigate("/products"),
          },
        ]
      : []),

    // ✅ CART ONLY FOR CUSTOMER
    ...(role === "customer"
      ? [
          {
            label: "Cart",
            command: () => navigate("/cart"),
          },
        ]
      : []),

    // If not logged in
    ...(!token
      ? [
          {
            label: "Login",
            command: () => navigate("/login"),
          },
          {
            label: "Register",
            command: () => navigate("/register"),
          },
        ]
      : [
          {
            label: "Logout",
            command: logout,
          },
        ]),
  ];

  return <Menubar model={items} />;
}
