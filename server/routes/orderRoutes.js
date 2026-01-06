const express = require("express");
const Order = require("../models/Order");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const razorpay = require("../utils/razorpay");

/* =====================
   CREATE ORDER
===================== */


router.post("/razorpay-order", authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // rupees → paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    });

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post("/", authMiddleware, async (req, res) => {
  try {
    const { items, address, subtotal, shipping, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in order" });
    }

    const order = new Order({
      user: req.userId, // ✅ now guaranteed
      items,
      address,
      subtotal,
      shipping,
      total,
    });

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =====================
   GET MY ORDERS
===================== */
router.get("/my", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/create-order", authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "order_rcptid_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Razorpay order failed" });
  }
});


module.exports = router;
