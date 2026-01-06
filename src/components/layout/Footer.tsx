import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-display text-2xl font-semibold tracking-wide"
            >
              ATELIER
            </Link>

            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Timeless pieces crafted with intention. Quality materials, ethical
              production, enduring style.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  to="/new-arrivals"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link
                  to="/sale"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/sustainability"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Sustainability
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/shipping"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Shipping
                </Link>
              </li>

              <li>
                <Link
                  to="/returns"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} Atelier. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/privacy-policy"
                className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
