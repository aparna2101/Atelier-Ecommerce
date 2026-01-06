import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  /* =========================
     REMOVE ITEM
  ========================== */
  const handleRemove = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} removed from cart`);
  };

  /* =========================
     EMPTY CART
  ========================== */
  if (cartItems.length === 0) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-main text-center max-w-lg mx-auto">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={32} className="text-muted-foreground" />
            </div>

            <h1 className="text-heading mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything yet.
            </p>

            <Link to="/products" className="btn-primary">
              Continue Shopping <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          <h1 className="text-display mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* ================= CART ITEMS ================= */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="grid md:grid-cols-12 gap-6 items-center border-b border-border pb-6"
                >
                  {/* Product */}
                  <div className="md:col-span-6 flex gap-4">
                    <Link to={`/product/${item._id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-32 object-cover bg-muted"
                      />
                    </Link>

                    <div>
                      <p className="text-xs uppercase text-muted-foreground">
                        {item.category}
                      </p>
                      <Link
                        to={`/product/${item._id}`}
                        className="font-display text-lg hover:text-accent"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="md:col-span-2 flex justify-center">
                    <div className="flex border border-border">
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="w-10 h-8 flex items-center justify-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-3 text-right font-medium">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Remove */}
                  <div className="md:col-span-1 text-right">
                    <button
                      onClick={() => handleRemove(item._id, item.name)}
                      className="btn-icon"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between mt-6">
                <Link to="/products" className="btn-ghost">
                  Continue Shopping
                </Link>

                <button
                  onClick={() => {
                    clearCart();
                    toast.success("Cart cleared");
                  }}
                  className="text-sm text-muted-foreground"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* ================= SUMMARY ================= */}
            <div className="bg-secondary p-6 lg:sticky lg:top-28">
              <h2 className="text-lg font-display mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6 flex justify-between font-medium">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="btn-primary w-full mb-4"
              >
                Proceed to Checkout
              </button>

              <p className="text-xs text-center mt-4 text-muted-foreground">
                Secure checkout. Free returns within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
