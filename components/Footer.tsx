import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footer } from "framer-motion/client";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
    >
      {children}
    </Link>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <Icon className="mt-0.5 size-4 shrink-0" />

      <div>
        <p className="text-sm text-primary-foreground/70">{label}</p>

        {children}
      </div>
    </li>
  );
}

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl ">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-sm bg-white">
                <span className="font-bold text-primary">TDG</span>
              </div>

              <div>
                <p className="font-semibold">TDG's Logistics</p>
                <p className="text-xs text-primary-foreground/70">
                  Shipping & Freight Solutions
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Your trusted partner for global shipping and logistics solutions.
              Delivering reliable freight forwarding, customs clearance, and
              supply chain services across international markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Contact Information</FooterHeading>

            <ul className="space-y-5">
              <ContactItem icon={Phone} label="Call Us">
                <a
                  href="tel:+233597993709"
                  className="text-sm font-medium transition-colors hover:text-white"
                >
                  +233 59 799 3709
                </a>
              </ContactItem>

              <ContactItem icon={Mail} label="Email">
                <a
                  href="mailto:info@tdglogistics.com"
                  className="text-sm font-medium transition-colors hover:text-white"
                >
                  info@tdglogistics.com
                </a>
              </ContactItem>

              <ContactItem icon={MapPin} label="Office">
                <p className="text-sm font-medium">Accra, Ghana</p>
              </ContactItem>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} TDG's Logistics. All rights reserved.
          </p>

          <div className="flex gap-6">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>

            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
