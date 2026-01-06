import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  _id: string;
  items: OrderItem[];
  total?: number;       // ✅ optional
  createdAt: string;
}

const MyOrders = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/orders/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          toast.error(data.message || "Failed to load orders");
          return;
        }

        setOrders(data);
      } catch {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <h1 className="text-display mb-8">My Orders</h1>

          {loading && (
            <p className="text-muted-foreground">Loading orders...</p>
          )}

          {!loading && orders.length === 0 && (
            <p className="text-muted-foreground">
              You have not placed any orders yet.
            </p>
          )}

          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="border border-border p-6 rounded"
              >
                <div className="flex justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    Order ID: {order._id}
                  </span>
                  <span className="text-sm">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="space-y-4">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 border-b border-border pb-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 object-cover bg-muted"
                      />

                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="font-medium">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ✅ SAFE TOTAL */}
                <div className="flex justify-end mt-4 font-semibold">
                  Total: ₹{(order.total ?? 0).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MyOrders;
