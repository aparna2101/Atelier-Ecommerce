const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    image: String,
    category: String,
    description: String,
    stock: Number,

    // ✅ NEW
    sizes: [String],

    isNew: Boolean,
    isSale: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
