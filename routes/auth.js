const express = require ("express");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");
const User = require ("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {expiresIn: 3600});
    res.status(201).json({ message: "Registered Successfully !!!" , token: token});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const valid = user && await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {expiresIn: 3600});
  res.json({ message: "Logged In Successfully !!!", token : token});
});

module.exports = router;