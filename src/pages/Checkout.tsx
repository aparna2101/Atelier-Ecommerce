import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

type Step = "address" | "payment" | "review";
type PaymentMethod = "COD" | "ONLINE";

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>("address");
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("COD");

  /* =====================
     ADDRESS STATE
  ====================== */
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  const subtotal = getCartTotal();
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  /* =====================
     PLACE ORDER (COD)
  ====================== */
  const handlePlaceOrder = async () => {
    if (!token) {
      toast.error("Please login again");
      navigate("/login");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    try {
      const res = await fetch("https://atelier-ecommerce.onrender.com/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            productId: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
          address,
          subtotal,
          shipping,
          total,
          paymentMethod,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Order failed");
        return;
      }

      clearCart();
      toast.success("Order placed successfully 🎉");
      navigate("/my-orders");
    } catch {
      toast.error("Something went wrong");
    }
  };

  /* =====================
     RAZORPAY PAYMENT
  ====================== */
  const handleRazorpayPayment = async () => {
    try {
      const res = await fetch(
        "https://atelier-ecommerce.onrender.com/api/orders/razorpay-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ amount: total }),
        }
      );

      const order = await res.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        name: "Atelier",
        description: "Order Payment",
        order_id: order.id,
        handler: async function () {
          await handlePlaceOrder();
          document.body.style.overflow = "auto";
        },
        modal: {
          ondismiss: function () {
            document.body.style.overflow = "auto";
          },
        },
        theme: {
          color: "#000000",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch {
      toast.error("Payment failed");
    }
  };

  /* =====================
     FINAL PAYMENT HANDLER
  ====================== */
  const handleFinalPayment = async () => {
    if (paymentMethod === "COD") {
      await handlePlaceOrder();
    } else {
      await handleRazorpayPayment();
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <h1 className="text-display mb-8">Checkout</h1>

          {/* =====================
              STEP 1 — ADDRESS
          ====================== */}
          {step === "address" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Shipping Address</h2>

              <input
                className="input w-full"
                placeholder="Full Name"
                value={address.name}
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
              />

              <input
                className="input w-full"
                placeholder="Phone"
                value={address.phone}
                onChange={(e) =>
                  setAddress({ ...address, phone: e.target.value })
                }
              />

              <input
                className="input w-full"
                placeholder="Street Address"
                value={address.street}
                onChange={(e) =>
                  setAddress({ ...address, street: e.target.value })
                }
              />

              <input
                className="input w-full"
                placeholder="City"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />

              <input
                className="input w-full"
                placeholder="Pincode"
                value={address.pincode}
                onChange={(e) =>
                  setAddress({ ...address, pincode: e.target.value })
                }
              />

              <button
                onClick={() => {
                  if (
                    !address.name ||
                    !address.phone ||
                    !address.street ||
                    !address.city ||
                    !address.pincode
                  ) {
                    toast.error("Please fill all address fields");
                    return;
                  }
                  setStep("payment");
                }}
                className="btn-primary w-full mt-4"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {/* =====================
              STEP 2 — PAYMENT
          ====================== */}
          {step === "payment" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Payment Method</h2>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "COD"}
                  onChange={() => setPaymentMethod("COD")}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "ONLINE"}
                  onChange={() => setPaymentMethod("ONLINE")}
                />
                Online Payment
              </label>

              <button
                onClick={() => setStep("review")}
                className="btn-primary w-full mt-4"
              >
                Review Order
              </button>

              <button
                onClick={() => setStep("address")}
                className="btn-ghost w-full"
              >
                Back
              </button>
            </div>
          )}

          {/* =====================
              STEP 3 — REVIEW
          ====================== */}
          {step === "review" && (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between border-b pb-2"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-secondary p-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>

                <div className="flex justify-between font-semibold mt-2">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleFinalPayment}
                className="btn-primary w-full"
              >
                {paymentMethod === "COD"
                  ? "Place Order"
                  : "Pay & Place Order"}
              </button>

              <button
                onClick={() => setStep("payment")}
                className="btn-ghost w-full mt-2"
              >
                Back
              </button>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
