import HeroSection from "@/components/shared/HeroSection";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using the services provided by TDG Logistics, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
    ],
  },
  {
    title: "2. Services",
    body: [
      "TDG's Logistics provides freight forwarding, cargo consolidation, customs clearance, warehousing, and delivery services. The specific terms of each engagement will be defined in a separate service agreement or quotation.",
      "We reserve the right to refuse service, modify our offerings, or discontinue services at our discretion.",
    ],
  },
  {
    title: "3. Quotes and Pricing",
    body: [
      "All quotes provided are estimates based on the information you supply and are valid for the period stated. Final charges may vary based on actual cargo weight, dimensions, customs duties, and any additional services required.",
      "Prices are subject to change due to fuel surcharges, currency fluctuations, regulatory changes, and other factors beyond our control.",
    ],
  },
  {
    title: "4. Customer Responsibilities",
    body: [
      "You are responsible for providing accurate and complete information about your shipment, including proper documentation, accurate descriptions of goods, and compliance with all applicable laws and regulations.",
      "You warrant that the goods you ship do not contain prohibited or restricted items and are properly packaged for transport.",
    ],
  },
  {
    title: "5. Liability",
    body: [
      "Our liability for loss or damage to cargo is limited as set out in the applicable international conventions, our service agreements, and industry standard terms. We strongly recommend that you obtain cargo insurance.",
      "We are not liable for delays caused by customs, weather, carrier issues, or other circumstances beyond our reasonable control.",
    ],
  },
  {
    title: "6. Payment Terms",
    body: [
      "Payment terms will be specified in your service agreement or invoice. Late payments may incur additional charges. We reserve the right to withhold delivery of goods until full payment is received.",
    ],
  },
  {
    title: "7. Cancellation",
    body: [
      "Cancellation of services must be communicated in writing. Cancellation fees may apply depending on the stage of the shipment and any costs already incurred on your behalf.",
    ],
  },
  {
    title: "8. Intellectual Property",
    body: [
      "All content on our website, including text, graphics, logos, and images, is the property of TDG's Logistics and protected by intellectual property laws. You may not use our content without prior written permission.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the jurisdiction in which TDG's Logistics operates. Any disputes shall be resolved in the courts of that jurisdiction.",
    ],
  },
  {
    title: "10. Contact Us",
    body: [
      "If you have any questions about these Terms of Service, please contact us at hello@tdgslogistics.com or +233 12 345 6789.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        header="Legal"
        title="Terms of Service"
        paragraph="Please read these terms carefully before using our logistics services."
        image="https://res.cloudinary.com/dvwpuenzk/image/upload/v1780969711/terms_phifbv.avif"
      />

      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: June 2026
          </p>
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
