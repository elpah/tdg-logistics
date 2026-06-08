import Image from "next/image";
import { Target, Eye, Users, Award, Globe, Clock } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import HeroSection from "@/components/shared/HeroSection";
import FeatureCard from "@/components/about/FeatureCard";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "10K+", label: "Shipments Delivered" },
  { value: "98%", label: "Customer Satisfaction" },
];

const values = [
  {
    icon: Users,
    title: "Customer First",
    description:
      "We put our clients at the center of everything we do, ensuring their success is our priority.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards in every shipment, every time.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Our extensive network ensures we can deliver anywhere in the world.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "On-time delivery is not just a goal—it is our commitment to you.",
  },
];

const gallery = [
  { src: "/images/warehouse.jpg", alt: "Modern warehouse facility" },
  { src: "/images/sea-freight.jpg", alt: "Cargo ship at sea" },
  { src: "/images/air-freight.jpg", alt: "Air cargo aircraft" },
  { src: "/images/fleet.jpg", alt: "Delivery fleet" },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-primary-foreground md:text-5xl">
        {value}
      </p>

      <p className="mt-2 text-primary-foreground/70">{label}</p>
    </div>
  );
}

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative h-48 overflow-hidden rounded-xl md:h-64">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection
        header="About Us"
        title="Your Partner in Global Logistics"
        paragraph="TDG Shipping & Logistics was founded with a simple mission: to make
        global shipping accessible, reliable, and stress-free for businesses
        of all sizes."
      />

      {/* Stats */}
      <section className="bg-primary px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-100 overflow-hidden rounded-2xl">
              <Image
                src="/images/team.jpg"
                alt="Our team at work"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <SectionHeader
                eyebrow="Our Story"
                title="From Local Roots to Global Reach"
              />

              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  What started as a small freight forwarding company has grown
                  into a comprehensive logistics provider serving clients across
                  50+ countries.
                </p>

                <p>
                  Our journey has been driven by a commitment to innovation,
                  customer service, and operational excellence. We have invested
                  in technology, expanded our network, and built a team of
                  dedicated professionals who share our passion for logistics.
                </p>

                <p>
                  Today, we handle thousands of shipments annually, from small
                  parcels to full container loads, helping businesses connect
                  with markets around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <FeatureCard
              icon={Target}
              title="Our Mission"
              description="To provide seamless, reliable, and cost-effective logistics solutions that empower businesses to grow and succeed in the global marketplace."
            />

            <FeatureCard
              icon={Eye}
              title="Our Vision"
              description="To be the most trusted logistics partner for businesses worldwide, known for our innovation, integrity, and unwavering commitment to customer success."
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Our Values" title="What Drives Us" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <FeatureCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                centered
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Gallery" title="Our Operations" />

          <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-4">
            {gallery.map((image) => (
              <GalleryImage key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
