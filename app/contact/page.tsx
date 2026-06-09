import Card from "@/components/contact/Cards";
import ContactForm from "@/components/contact/ContactForm";
import HeroSection from "@/components/shared/HeroSection";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+233 59 7993 709",
    description: "Mon-Fri 9am-6pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@tdglogistics.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Shipping Lane",
    description: "Accra, Ghana",
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
        paragraph=" Have questions about our services? Need a quote? We are here to
              help. Reach out and our team will get back to you promptly."
        image="https://res.cloudinary.com/dvwpuenzk/image/upload/v1780969714/contact_pyxcqi.avif"
      />

      {/* Contact Grid */}
      <section className="pb-20 px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 grid gap-3 md:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((item) => (
                <Card
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-[#13bb51] p-5 text-white transition-colors hover:bg-[#20BD5A]"
              >
                <MessageCircle className="size-6 shrink-0" />

                <div>
                  <p className="font-semibold text-white">Chat on WhatsApp</p>

                  <p className="text-sm text-white/80">
                    Quick response guaranteed
                  </p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 p-8 bg-card border border-border rounded-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-2">
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
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Our location"
              src="https://www.google.com/maps?q=Stationsstraat+75,+Zaandam,+Netherlands&output=embed"
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
