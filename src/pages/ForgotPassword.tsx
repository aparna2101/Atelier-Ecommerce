import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-md">
          <h1 className="text-heading mb-4 text-center">
            Forgot Password
          </h1>

          <p className="text-sm text-muted-foreground mb-6 text-center">
            Enter your registered email. We’ll help you reset it.
          </p>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            {/* Web3Forms access key */}
            <input
              type="hidden"
              name="access_key"
              value="4452ccb2-e366-4258-895c-f50a41a2473c"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your registered email"
              className="input"
              required
            />

            {/* Message */}
            <input
              type="hidden"
              name="subject"
              value="Atelier — Forgot Password Request"
            />

            <textarea
              name="message"
              className="input h-28 resize-none"
              placeholder="User requested password reset"
              required
            />

            <button type="submit" className="btn-primary w-full">
              Send Reset Request
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Remembered your password?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
