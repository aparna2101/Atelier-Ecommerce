import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <h1 className="text-display mb-6">Contact Us</h1>

          <p className="text-muted-foreground mb-8">
            Have any questions about orders, shipping, or returns?  
            Fill out the form below and we’ll respond within 24 hours.
          </p>

          {/* CONTACT INFO */}
          <div className="mb-10 text-sm space-y-1">
            <p><strong>Email:</strong> support@atelier.com</p>
            <p><strong>Phone:</strong> +91 9XXXXXXXXX</p>
            <p><strong>Hours:</strong> Mon–Sat, 10AM – 6PM</p>
          </div>

          {/* WEB3FORMS CONTACT FORM */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            {/* REQUIRED ACCESS KEY */}
            <input
              type="hidden"
              name="access_key"
              value="4452ccb2-e366-4258-895c-f50a41a2473c"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input w-full"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="input w-full"
            />

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
