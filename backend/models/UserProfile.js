const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: {
      type: String,
      required: true,
      minlength: 7   //  more than 6 characters
    },

    role: {
      type: String,
      enum: ["admin", "user", "retailer"],
      default: "user",
    }
  }
);

module.exports = mongoose.model("UserProfile", userProfileSchema);
