import Layout from "@/components/layout/Layout";

const Sustainability = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <h1 className="text-display mb-6">Sustainability</h1>

          <p className="text-muted-foreground mb-4">
            Sustainability is at the heart of Atelier.
          </p>

          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Ethically sourced materials</li>
            <li>Low-waste packaging</li>
            <li>Responsible manufacturing partners</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Sustainability;
