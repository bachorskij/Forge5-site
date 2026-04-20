import { Link } from "@tanstack/react-router";
import forge5Logo from "@/assets/forge5-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img src={forge5Logo} alt="Forge5 Designs" className="h-12 w-auto" loading="lazy" />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Brand identity & digital design for the trades. London, Ontario.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Navigation</h4>
            <ul className="mt-3 space-y-2">
              {[
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Services</h4>
            <ul className="mt-3 space-y-2">
              {["Brand Identity", "Vehicle Wraps", "Digital Presence", "Print Design"].map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Get in Touch</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>London, Ontario</li>
              <li>
                <a href="mailto:hello@forge5designs.com" className="transition-colors hover:text-primary">
                  hello@forge5designs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Forge5 Designs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
