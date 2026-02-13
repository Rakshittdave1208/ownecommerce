require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const passport = require("./config/passport");

const app = express();

// Middlewares
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Initialize passport BEFORE routes
app.use(passport.initialize());

// Connect DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/product"));
app.use("/api/cart", require("./routes/cart"));

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("🔥🔥 PASSPORT SERVER RUNNING 🔥🔥");
  console.log(`Server is Running at PORT ${5000}`)
});
