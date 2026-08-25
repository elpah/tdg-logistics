import HeroSection from "@/components/shared/HeroSection";

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect information you provide directly to us, such as when you request a quote, fill out a contact form, or communicate with us. This may include your name, email address, phone number, company name, and shipment details.",
      "We also automatically collect certain information when you visit our website, including your IP address, browser type, device information, and pages visited, through cookies and similar technologies.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information we collect to provide and improve our logistics services, respond to your inquiries, process shipment requests, send you quotes and updates, and comply with legal obligations.",
      "We may also use your information to send you marketing communications about our services, which you can opt out of at any time.",
    ],
  },
  {
    title: "3. Information Sharing",
    body: [
      "We may share your information with trusted third parties who assist us in operating our business, such as shipping carriers, customs authorities, and technology providers, but only to the extent necessary to deliver our services.",
      "We do not sell your personal information to third parties. We may disclose information when required by law or to protect our rights and safety.",
    ],
  },
  {
    title: "4. Data Security",
    body: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.",
    ],
  },
  {
    title: "5. Your Rights",
    body: [
      "Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information. You may also have the right to object to processing and to data portability.",
      "To exercise these rights, please contact us using the details provided below.",
    ],
  },
  {
    title: "6. Cookies",
    body: [
      "Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings, though disabling them may affect site functionality.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
    ],
  },
  {
    title: "8. Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or our data practices, please contact us at info@tdgslogistics.com or +233 12 345 6789.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        header="Legal"
        title="Privacy Policy"
        paragraph="Your privacy matters to us. This policy explains how we collect, use, and protect your personal information."
        image="https://res.cloudinary.com/dvwpuenzk/image/upload/v1780969710/privacy_w4pxod.avif"
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
