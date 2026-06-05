import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Sea Freight", href: "/services#sea-freight" },
    { name: "Air Freight", href: "/services#air-freight" },
    { name: "Cargo Consolidation", href: "/services#consolidation" },
    { name: "Customs Clearance", href: "/services#customs" },
    { name: "Warehouse & Delivery", href: "/services#warehouse" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-sm bg-white">
                <span className="font-bold text-primary">TDG</span>
              </div>

              <div>
                <p className="font-semibold">TDG Logistics</p>
                <p className="text-xs text-primary-foreground/70">
                  Shipping & Freight Solutions
                </p>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Your trusted partner for global shipping and logistics solutions.
              Delivering reliable freight forwarding, customs clearance, and
              supply chain services across international markets.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Services
            </h3>

            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Company
            </h3>

            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Contact Info
            </h3>

            <ul className="space-y-5">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0" />

                <div>
                  <p className="text-sm text-primary-foreground/70">Call Us</p>

                  <a
                    href="tel:+233597993709"
                    className="text-sm font-medium transition-colors hover:text-white"
                  >
                    +233 59 799 3709
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" />

                <div>
                  <p className="text-sm text-primary-foreground/70">Email</p>

                  <a
                    href="mailto:info@tdglogistics.com"
                    className="text-sm font-medium transition-colors hover:text-white"
                  >
                    info@tdglogistics.com
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" />

                <div>
                  <p className="text-sm text-primary-foreground/70">Office</p>

                  <p className="text-sm font-medium">Accra, Ghana</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* CTA Section */}
        <div className="mt-12 rounded-xl border border-primary-foreground/10 bg-white/10 p-8 text-center">
          <h3 className="text-2xl font-semibold">Need a Shipping Solution?</h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-primary-foreground/70">
            Whether you need sea freight, air freight, customs clearance, or
            end-to-end logistics support, our team is ready to help.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-white/90"
          >
            Request a Quote
          </Link>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} TDG Logistics. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
