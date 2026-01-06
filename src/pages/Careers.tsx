import Layout from "@/components/layout/Layout";

const Careers = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <h1 className="text-display mb-6">Careers at Atelier</h1>

          <p className="text-muted-foreground mb-6">
            We’re always looking for passionate individuals who love fashion,
            technology, and great customer experiences.
          </p>

          <div className="bg-secondary p-6 rounded">
            <h3 className="font-semibold mb-2">Current Openings</h3>
            <p className="text-muted-foreground text-sm">
              No openings right now.  
              Send your resume to{" "}
              <span className="font-medium">careers@atelier.com</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
