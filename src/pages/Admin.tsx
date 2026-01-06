import { useState } from "react";
import Layout from "@/components/layout/Layout";

const Admin = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    stock: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://atelier-ecommerce.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          stock: Number(form.stock),
        }),
      });

      if (!res.ok) throw new Error("Failed to add product");

      alert("✅ Product added successfully");
      setForm({ name: "", price: "", image: "", category: "", stock: "" });
    } catch (err) {
      alert("❌ Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container-main py-16 max-w-xl">
        <h1 className="text-2xl font-semibold mb-6">Admin – Add Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-4 py-2"
            required
          />

          <input
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="w-full border px-4 py-2"
            required
          />

          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full border px-4 py-2"
            required
          />

          <input
            name="category"
            placeholder="Category (Tops, Bottoms...)"
            value={form.category}
            onChange={handleChange}
            className="w-full border px-4 py-2"
            required
          />

          <input
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            className="w-full border px-4 py-2"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-2"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Admin;
