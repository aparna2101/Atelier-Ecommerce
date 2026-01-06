import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Registration failed");
        return;
      }

      toast.success("Account created successfully 🎉");
      navigate("/login");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center section-padding">
        <div className="grid md:grid-cols-2 w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
          
          {/* LEFT BRAND PANEL */}
          <div className="hidden md:flex flex-col justify-center bg-black text-white p-12">
            <h1 className="font-display text-4xl mb-4">Join Atelier</h1>
            <p className="text-white/80 mb-6">
              Create an account to explore timeless fashion,
              track orders, and enjoy a seamless shopping experience.
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li>✓ Premium quality products</li>
              <li>✓ Secure payments</li>
              <li>✓ Easy returns</li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="Minimum 6 characters"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full mt-4"
              >
                {loading ? "Creating account..." : "Register"}
              </button>
            </form>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-black font-medium underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
