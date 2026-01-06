require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

/* =====================
   GLOBAL MIDDLEWARE
===================== */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* LOGGER */
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

/* =====================
   ROUTES
===================== */
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

/* =====================
   TEST ROUTE
===================== */
app.get("/", (req, res) => {
  res.send("Backend with DB running 🚀");
});

/* =====================
   START SERVER AFTER DB
===================== */
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected ✅");
    } catch (err) {
    console.error("MongoDB connection failed ❌");
    console.error(err);
    process.exit(1);
  }
   app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
};

startServer();
