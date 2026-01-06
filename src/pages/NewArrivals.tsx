import Layout from "@/components/layout/Layout";
import Products from "./Products";

const NewArrivals = () => {
  return (
    <Layout>
      <section className="section-padding">
        <h1 className="text-display mb-6">New Arrivals</h1>
        <Products filter="new" />
      </section>
    </Layout>
  );
};

export default NewArrivals;
