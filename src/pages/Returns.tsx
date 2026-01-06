import Layout from "@/components/layout/Layout";
import { RotateCcw, AlertCircle, CreditCard } from "lucide-react";

const Returns = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <h1 className="text-display mb-4">Returns & Refunds</h1>
          <p className="text-muted-foreground mb-10">
            Easy and transparent return process for your peace of mind.
          </p>

          <div className="space-y-8">
            {/* Return Window */}
            <div className="flex gap-4 items-start">
              <RotateCcw className="mt-1" />
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Return Window
                </h3>
                <p className="text-muted-foreground">
                  Products can be returned within <strong>7 days</strong> of delivery
                  if they are unused, unwashed, and in original packaging.
                </p>
              </div>
            </div>

            {/* Non-returnable */}
            <div className="flex gap-4 items-start">
              <AlertCircle className="mt-1" />
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Non-Returnable Items
                </h3>
                <p className="text-muted-foreground">
                  Items purchased during clearance sales or marked as
                  <strong> “Final Sale”</strong> are not eligible for return.
                </p>
              </div>
            </div>

            {/* Refunds */}
            <div className="flex gap-4 items-start">
              <CreditCard className="mt-1" />
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Refund Process
                </h3>
                <p className="text-muted-foreground">
                  Refunds are processed within <strong>5–7 business days</strong>
                  after the returned item passes quality inspection.
                </p>
                <p className="text-muted-foreground mt-2">
                  • Online payments → refunded to original payment method  
                  <br />
                  • Cash on Delivery → refunded to bank account
                </p>
              </div>
            </div>

            {/* Help */}
            <div className="bg-secondary p-4 rounded">
              <p className="text-sm text-muted-foreground">
                For return assistance, contact us at{" "}
                <strong>support@atelier.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Returns;
