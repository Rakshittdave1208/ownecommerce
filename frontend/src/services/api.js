import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// 🔐 Attach JWT automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

/* ================= PRODUCTS ================= */

// GET all products
export const getProducts = () => API.get("/products");

// ADD product
export const addProduct = (data) => API.post("/products", data);

// UPDATE product
export const updateProduct = (id, data) =>
  API.put(`/products/${id}`, data);

// DELETE product
export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);

/* ================= AUTH ================= */

export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

export default API;
