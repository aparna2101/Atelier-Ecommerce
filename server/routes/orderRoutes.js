const express = require("express");
const Order = require("../models/Order");
const authMiddleware = require("../middleware/authMiddleware");
const razorpay = require("../utils/razorpay");

const router = express.Router();

/* =====================
   RAZORPAY ORDER CREATE
===================== */
router.post("/razorpay-order", authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // rupees → paise
      currency: "INR",
      receipt: "rcpt_" + Date.now(),
    });

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID, // ✅ REQUIRED
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =====================
   SAVE ORDER (AFTER PAYMENT)
===================== */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { items, address, subtotal, shipping, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in order" });
    }

    const order = new Order({
      user: req.userId,
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
    const orders = await Order.find({ user: req.userId }).sort({
      createdAt: -1,
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;