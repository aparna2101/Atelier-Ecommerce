import Layout from "@/components/layout/Layout";
import Products from "./Products";

const Sale = () => {
  return (
    <Layout>
      <section className="section-padding">
        <h1 className="text-display mb-6">Sale</h1>
        <Products filter="sale" />
      </section>
    </Layout>
  );
};

export default Sale;
