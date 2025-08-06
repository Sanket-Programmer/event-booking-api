require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URI).then(() => 
  console.log("MongoDB Connected")).
catch((err) => 
  console.log("MongoDB connection failed",err.message));

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));
app.use("/api/bookings", require("./routes/bookings"));

app.get("/", (req, res) => res.send("Welcome to Event Booking API"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
});