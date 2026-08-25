import Card from "@/components/contact/Cards";
import ContactForm from "@/components/contact/ContactForm";
import HeroSection from "@/components/shared/HeroSection";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+233 12 345 6789",
    href: "tel:+233123456789",
    description: "Mon-Fri 9am-6pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@tdgslogistics.com",
    href: "mailto:info@tdgslogistics.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Afienya, Greater Accra Region, Ghana",
    description: "GPS: GN-0860-7444",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9am - 6pm",
    description: "Sat: 9am - 1pm",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection
        header="Contact Us"
        title="Get in Touch"
        paragraph="Have questions about our services? Need a quote? We are here to help. Reach out and our team will get back to you promptly."
        image="https://res.cloudinary.com/dvwpuenzk/image/upload/v1780969714/contact_pyxcqi.avif"
      />

      {/* Contact Grid */}
      <section className="pb-20 px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((item) => (
                <Card
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  description={item.description}
                  icon={item.icon}
                  href={"href" in item ? item.href : undefined}
                />
              ))}
              <a
                href="https://wa.me/233123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-3 rounded-xl bg-[#0B7A38] p-5 text-primary-foreground transition-colors duration-300 hover:bg-[#0C8A40]"
              >
                <MessageCircle className="size-6 shrink-0" />

                <div>
                  <p className="font-semibold text-primary-foreground">
                    Chat on WhatsApp
                  </p>

                  <p className="text-sm text-primary-foreground/90">
                    Quick response guaranteed
                  </p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 lg:col-span-2">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
                Request a Quote
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we will get back to you with a
                customized quote.
              </p>

              {/*  */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-xl ring-1 ring-border/60">
            <iframe
              title="Our location"
              src="https://www.google.com/maps?q=5.806529,0.012329&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
