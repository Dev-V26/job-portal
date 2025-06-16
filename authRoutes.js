const express = require("express");
const router = express.Router();
const User = require("../models/User");

const admin = {
  email: "admin@jobportal.com",
  password: "admin123",
};

// Register user
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: "User already exists" });
  const user = new User({ email, password });
  await user.save();
  res.json({ message: "User registered" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;

  if (role === "admin") {
    if (email === admin.email && password === admin.password) {
      return res.json({ role: "admin" });
    } else {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }
  } else {
    const user = await User.findOne({ email, password });
    if (user) return res.json({ role: "user" });
    return res.status(401).json({ message: "Invalid user credentials" });
  }
});

module.exports = router;
