const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

const products = [
  // ================= MEN =================
  {
    name: "Classic Cotton T-Shirt",
    price: 499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    description: "Soft breathable cotton t-shirt",
    stock: 50,
    isNew: true,
    sizes: ["S", "M", "L", "XL"], // ✅
  },
  {
    name: "Formal White Shirt",
    price: 1299,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    description: "Slim fit formal office shirt",
    stock: 30,
    isSale: true,
    sizes: ["S", "M", "L", "XL"], // ✅
  },

  // ================= WOMEN =================
 
  {
    name: "Casual Denim Jacket",
    price: 2499,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
    category: "Women",
    description: "Stylish denim jacket",
    stock: 15,
    sizes: ["S", "M", "L", "XL"], // ✅
  },

  // ================= FOOTWEAR =================
  
  {
    name: "Leather Sandals",
    price: 1499,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800&q=80",
    category: "Footwear",
    description: "Genuine leather sandals",
    stock: 20,
    sizes:  ["4", "5", "6", "7"], // ✅
  },

  // ================= ELECTRONICS =================
  {
    name: "Wireless Headphones",
    price: 3999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    description: "Noise cancelling headphones",
    stock: 35,
  },
  {
    name: "Smart Watch",
    price: 5999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    description: "Fitness tracking smartwatch",
    stock: 18,
    isNew: true,
  },

  // ================= HOME =================
  {
    name: "Decorative Table Lamp",
    price: 1999,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    category: "Home",
    description: "Warm ambient table lamp",
    stock: 22,
  },
 

  // ================= ACCESSORIES =================
  {
    name: "Leather Wallet",
    price: 999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    description: "Slim leather wallet",
    stock: 50,
  },
  {
    name: "Aviator Sunglasses",
    price: 1299,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    description: "UV protected sunglasses",
    stock: 40,
  },

  // ================= BEAUTY =================
  
  {
    name: "Herbal Shampoo",
    price: 599,
    image: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?auto=format&fit=crop&w=800&q=80",
    category: "Beauty",
    description: "Sulphate free shampoo",
    stock: 45,
  },
  // ================= MEN =================
{
  name: "Slim Fit Black T-Shirt",
  price: 699,
  image: "https://images.unsplash.com/photo-1520974735194-6c0d9c5b5a82?auto=format&fit=crop&w=800&q=80",
  category: "Men",
  description: "Premium slim fit black t-shirt",
  stock: 40,
  sizes: ["S", "M", "L", "XL"], // ✅
},
{
  name: "Blue Denim Jeans",
  price: 1999,
  image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
  category: "Men",
  description: "Classic blue denim jeans",
  stock: 35,
  sizes: ["S", "M", "L", "XL"], // ✅
},
{
  name: "Hooded Sweatshirt",
  price: 1799,
  image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  category: "Men",
  description: "Warm cotton hoodie",
  stock: 25,
  sizes: ["S", "M", "L", "XL"], // ✅
},

// ================= WOMEN =================
{
  name: "Elegant Evening Gown",
  price: 3499,
  image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
  category: "Women",
  description: "Elegant party wear gown",
  stock: 15,
  sizes: ["S", "M", "L", "XL"], // ✅
},
{
  name: "Casual Cotton Top",
  price: 899,
  image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  category: "Women",
  description: "Soft casual cotton top",
  stock: 40,
  sizes: ["S", "M", "L", "XL"], // ✅
},
{
  name: "Pleated Skirt",
  price: 1499,
  image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
  category: "Women",
  description: "Stylish pleated skirt",
  stock: 30,
  sizes: ["S", "M", "L", "XL"], // ✅
},

// ================= FOOTWEAR =================
{
  name: "Running Sneakers",
  price: 2999,
  image: "https://images.unsplash.com/photo-1528701800489-20be4c7b7c4a?auto=format&fit=crop&w=800&q=80",
  category: "Footwear",
  description: "Comfortable running sneakers",
  stock: 45,
  sizes: ["4", "5", "6", "7"], // ✅
},
{
  name: "Casual Canvas Shoes",
  price: 1899,
  image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
  category: "Footwear",
  description: "Everyday casual canvas shoes",
  stock: 35,
  sizes:  ["4", "5", "6", "7"], // ✅
},
{
  name: "Formal Leather Shoes",
  price: 3499,
  image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?auto=format&fit=crop&w=800&q=80",
  category: "Footwear",
  description: "Premium formal leather shoes",
  stock: 20,
  sizes:  ["4", "5", "6", "7"], // ✅
},

// ================= ELECTRONICS =================
{
  name: "Bluetooth Speaker",
  price: 2499,
  image: "https://images.unsplash.com/photo-1585386959984-a4155228fdb2?auto=format&fit=crop&w=800&q=80",
  category: "Electronics",
  description: "Portable bluetooth speaker",
  stock: 30,
},
{
  name: "Wireless Mouse",
  price: 999,
  image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
  category: "Electronics",
  description: "Ergonomic wireless mouse",
  stock: 50,
},
{
  name: "Laptop Backpack",
  price: 2199,
  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  category: "Electronics",
  description: "Durable laptop backpack",
  stock: 25,
},

// ================= HOME =================
{
  name: "Wall Clock",
  price: 1299,
  image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
  category: "Home",
  description: "Modern wall clock",
  stock: 20,
},
{
  name: "Sofa Cushion Set",
  price: 999,
  image: "https://images.unsplash.com/photo-1582582494700-3c21b0f3a3e8?auto=format&fit=crop&w=800&q=80",
  category: "Home",
  description: "Comfortable cushion covers",
  stock: 35,
},
{
  name: "Ceramic Vase",
  price: 1799,
  image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
  category: "Home",
  description: "Decorative ceramic vase",
  stock: 18,
},

// ================= BEAUTY =================
{
  name: "Face Wash Gel",
  price: 399,
  image: "https://images.unsplash.com/photo-1585238342028-4bbc5b4d0b7d?auto=format&fit=crop&w=800&q=80",
  category: "Beauty",
  description: "Gentle face cleansing gel",
  stock: 60,
},
{
  name: "Moisturizing Lotion",
  price: 499,
  image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
  category: "Beauty",
  description: "Daily moisturizing lotion",
  stock: 55,
},
{
  name: "Hair Oil",
  price: 299,
  image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
  category: "Beauty",
  description: "Nourishing hair oil",
  stock: 70,
},



];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Products seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed", err);
    process.exit(1);
  }
}

seed();
