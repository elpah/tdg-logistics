import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Ship, Plane, Package, Warehouse } from "lucide-react";

import { SectionHeader } from "@/components/home/SectionHeader";
import { ServiceCard } from "@/components/home/ServiceCard";
import { ProcessStep } from "@/components/home/ProcessStep";
import { ChecklistItem } from "@/components/home/ChecklistItem";
import { SecondaryButton, QuoteButton } from "@/components/home/CtaButton";

const services = [
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "Cost-effective ocean shipping for large cargo volumes worldwide.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo for time-sensitive shipments.",
  },
  {
    icon: Package,
    title: "Cargo Consolidation",
    description: "Combine smaller shipments to optimize costs and efficiency.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage facilities with inventory management.",
  },
];

const steps = [
  {
    number: "01",
    title: "Get a Quote",
    description:
      "Tell us about your cargo and destination. We provide transparent pricing.",
  },
  {
    number: "02",
    title: "We Handle Logistics",
    description: "Our team manages pickup, customs, and transportation.",
  },
  {
    number: "03",
    title: "Track Your Shipment",
    description: "Real-time updates keep you informed every step of the way.",
  },
  {
    number: "04",
    title: "Delivery Complete",
    description: "Your goods arrive safely at the destination on schedule.",
  },
];

const reasons = [
  "15+ years of industry experience",
  "Global network spanning 50+ countries",
  "Dedicated account managers",
  "Competitive and transparent pricing",
  "24/7 customer support",
  "Real-time shipment tracking",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}

      <section className="relative pt-20">
        <div className="relative min-h-175 lg:min-h-200 w-full overflow-hidden">
          <Image
            src="/images/hero-port.jpg"
            alt="Global shipping and logistics operations"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-primary/20" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl ">
              <div className="max-w-3xl">
                {/* Badge */}
                <span className="inline-flex rounded-full bg-white/10 px-2 py-1 text-xs md:text-sm md:py-2 font-medium text-white backdrop-blur-sm">
                  Global Logistics Solutions
                </span>

                {/* Heading */}
                <h1 className="mt-6 font-extrabold tracking-tight text-primary-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.2]">
                  Moving Your Cargo
                  <br />
                  Across the World
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                  Reliable sea and air freight services with real-time tracking.
                  From pickup to delivery, we handle it all.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <QuoteButton />

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-sm bg-white/10 px-6 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What We Offer"
            title="Comprehensive Logistics Services"
            description="End-to-end solutions tailored to your shipping needs"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <SecondaryButton href="/services">
              View All Services
              <ArrowRight className="ml-2 size-4" />
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Simple Process"
            title="How It Works"
            description="Getting your cargo shipped is easier than you think"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <ProcessStep {...step} />

                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-[50%] hidden w-[40%] border-t-2 border-dashed border-primary/20 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-100 overflow-hidden rounded-2xl lg:h-125">
              <Image
                src="/images/fleet.jpg"
                alt="Fleet of delivery trucks"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <SectionHeader
                eyebrow="Why Choose Us"
                title="Your Trusted Logistics Partner"
              />

              <p className="mb-8 leading-relaxed text-muted-foreground">
                With over 15 years of experience in global shipping, we
                understand what it takes to deliver your cargo safely and on
                time. Our commitment to excellence sets us apart.
              </p>

              <ul className="space-y-4">
                {reasons.map((reason) => (
                  <ChecklistItem key={reason}>{reason}</ChecklistItem>
                ))}
              </ul>

              <div className="mt-8">
                <SecondaryButton href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 size-4" />
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-primary px-8 py-16 text-center shadow-xl md:px-16">
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              Ready to Ship Your Cargo?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Whether you're moving a single shipment or managing a complex
              supply chain, our logistics experts are ready to help. Get a fast,
              transparent quote tailored to your business needs.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <QuoteButton />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-white/20 px-6 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
