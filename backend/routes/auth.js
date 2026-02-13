const express = require("express");
const passport = require("passport");   // 🔥 THIS WAS MISSING
const authController = require("../controllers/authController");

const router = express.Router();

// Register
router.post("/register", authController.register);

// Login
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  authController.login
);

module.exports = router;
