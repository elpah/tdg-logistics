import CTA from "@/components/shared/CTA";
import HomeHero from "@/components/home/HomeHero";
import HomeServiceSection from "@/components/home/HomeServiceSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import HomeWhyChooseUs from "@/components/home/HomeWhyChooseUs";

const services = [
  {
    icon: "ship",
    title: "Sea Freight",
    description:
      "Cost-effective ocean shipping for large cargo volumes worldwide.",
  },
  {
    icon: "plane",
    title: "Air Freight",
    description: "Fast and reliable air cargo for time-sensitive shipments.",
  },
  {
    icon: "package",
    title: "Cargo Consolidation",
    description: "Combine smaller shipments to optimize costs and efficiency.",
  },
  {
    icon: "warehouse",
    title: "Warehousing",
    description: "Secure storage facilities with inventory management.",
  },
] as const;

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
      <HomeHero />
      <HomeServiceSection services={services} />
      <HowItWorksSection steps={steps} />
      <HomeWhyChooseUs reasons={reasons} />
      <CTA
        title="Ready to Ship Your Cargo?"
        paragraph="Whether you're moving a single shipment or managing a complex supply chain, our logistics experts are ready to help. Get a fast, transparent quote tailored to your business needs."
      />
    </main>
  );
}
