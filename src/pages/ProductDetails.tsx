import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  description?: string;
  sizes?: string[];
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");

  const { addToCart } = useCart();
const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <p className="text-center py-20">Loading…</p>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <p className="text-center py-20">Product not found</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main grid md:grid-cols-2 gap-10">
          <img src={product.image} alt={product.name} className="rounded" />

          <div>
            <h1 className="text-display mb-4">{product.name}</h1>
            <p className="text-xl mb-4">₹{product.price}</p>
            <p className="mb-6">{product.description}</p>

            {/* ✅ SIZE SELECT */}
            {product.sizes && (
              <div className="mb-6">
                <p className="mb-2 font-medium">Select Size</p>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ADD TO CART */}
            <button
              onClick={() => {
                if (!selectedSize) {
                  toast.error("Please select a size");
                  return;
                }
                addToCart({ ...product, size: selectedSize } as any);
                toast.success("Added to cart");
              }}
              className="btn-primary"
            >
              Add to Cart
            </button>
            <button
  onClick={() => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addToCart({ ...product, size: selectedSize } as any);
   navigate("/checkout");

  }}
  className="btn-ghost mt-3"
>
  Buy Now
</button>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
