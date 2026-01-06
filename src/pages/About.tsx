import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <h1 className="text-display mb-6">About Atelier</h1>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Atelier is a modern fashion and lifestyle brand focused on creating
            timeless products with premium quality and ethical production.
            Our goal is to bridge the gap between contemporary design and
            everyday comfort.
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Founded with a passion for craftsmanship, Atelier believes in
            quality over quantity. Every product is thoughtfully designed
            using durable materials that stand the test of time.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-secondary p-6 rounded">
              <h3 className="font-semibold mb-2">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To deliver high-quality products while maintaining transparency
                and sustainability in every step.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded">
              <h3 className="font-semibold mb-2">Our Vision</h3>
              <p className="text-sm text-muted-foreground">
                To become a trusted global brand that values people, planet,
                and purpose.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded">
              <h3 className="font-semibold mb-2">Our Values</h3>
              <p className="text-sm text-muted-foreground">
                Quality craftsmanship, ethical sourcing, and customer-first
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
