import Layout from "@/components/layout/Layout";
import { Truck, Clock, Globe } from "lucide-react";

const Shipping = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <h1 className="text-display mb-4">Shipping Information</h1>
          <p className="text-muted-foreground mb-10">
            Everything you need to know about how we deliver your orders.
          </p>

          <div className="space-y-8">
            {/* Delivery Time */}
            <div className="flex gap-4 items-start">
              <Clock className="mt-1" />
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Delivery Time
                </h3>
                <p className="text-muted-foreground">
                  Orders are usually delivered within <strong>5–7 business days</strong>.
                  Remote locations may take up to 10 days.
                </p>
              </div>
            </div>

            {/* Shipping Charges */}
            <div className="flex gap-4 items-start">
              <Truck className="mt-1" />
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Shipping Charges
                </h3>
                <p className="text-muted-foreground">
                  Free shipping on orders above ₹1500.  
                  Orders below ₹1500 have a flat shipping charge of ₹150.
                </p>
              </div>
            </div>

            {/* International Shipping */}
            <div className="flex gap-4 items-start">
              <Globe className="mt-1" />
              <div>
                <h3 className="text-lg font-medium mb-1">
                  International Shipping
                </h3>
                <p className="text-muted-foreground">
                  Currently, we ship only within India.  
                  International shipping will be available soon.
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="bg-secondary p-4 rounded">
              <p className="text-sm text-muted-foreground">
                Once your order is shipped, you will receive tracking details
                via email or SMS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shipping;
