require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    withCredentials: true,
  })
);

app.use(express.json());

connectDB();

// Mount routes
app.use("/api/products", require("./routes/product"));
app.use("/api/cart", require("./routes/cart"));

app.get("/", (req, res) => {
  res.json({ message: "Backend running on port 5000" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
