import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
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
      className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
    >
      {children}
    </Link>
  );
}

function ContactItem({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const className =
    "flex items-start gap-3 rounded-md text-inherit no-underline transition-[transform,color] duration-300 ease-out hover:-translate-y-px hover:text-primary-foreground motion-reduce:transition-none motion-reduce:hover:translate-y-0";

  const content = (
    <>
      <Icon className="mt-0.5 size-4 shrink-0" />

      <div>
        <p className="text-sm text-primary-foreground/80 transition-colors duration-300 group-hover:text-primary-foreground/90">
          {label}
        </p>

        {children}
      </div>
    </>
  );

  if (href) {
    return (
      <li>
        <a href={href} className={`group ${className} cursor-pointer`}>
          {content}
        </a>
      </li>
    );
  }

  return <li className={`group ${className}`}>{content}</li>;
}

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl ">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company */}
          <div>
            <Link href="/" className="flex shrink-0 items-start">
              <div className="relative h-10 w-28 rounded bg-primary-foreground sm:h-12 sm:w-32 lg:h-16">
                <Image
                  src="https://res.cloudinary.com/dvwpuenzk/image/upload/v1782091880/tdd_logo_ksizmd.png"
                  alt="TDG Shipping & Logistics"
                  fill
                  sizes="128px"
                  quality={90}
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/85">
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
              <ContactItem
                icon={Phone}
                label="Call Us"
                href="tel:+233597993709"
              >
                <p className="text-sm font-medium">+233 59 799 3709</p>
              </ContactItem>

              <ContactItem
                icon={Mail}
                label="Email"
                href="mailto:info@tdgslogistics.com"
              >
                <p className="text-sm font-medium">info@tdgslogistics.com</p>
              </ContactItem>

              <ContactItem icon={MapPin} label="Office">
                <p className="text-sm font-medium">
                  Afienya, Greater Accra Region, Ghana
                </p>
                <p className="text-sm font-medium">GPS: GN-0860-7444</p>
              </ContactItem>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-primary-foreground/10 pt-8 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:text-left lg:grid lg:grid-cols-3">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()}{" "}
            TDG&apos;s Logistics. All rights reserved.
          </p>

          <p className="order-3 w-full text-center text-sm text-primary-foreground/70 lg:order-none lg:w-auto">
            Designed and developed by{" "}
            <a
              href="http://paruah.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/85 underline-offset-2 transition-colors hover:text-primary-foreground hover:underline"
            >
              Paruah Systems
            </a>
          </p>

          <div className="order-2 flex justify-center gap-6 sm:justify-end lg:order-none">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>

            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
