"use client";

import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";
import { SecondaryButton } from "./CtaButton";
import { ServiceCard, type ServiceIcon } from "./ServiceCard";

type Service = {
  icon: ServiceIcon;
  title: string;
  description: string;
};

interface HomeServiceSectionProps {
  services: readonly Service[];
}

const HomeServiceSection = ({
  services,
}: HomeServiceSectionProps)=> {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What We Offer"
          title="Comprehensive Logistics Services"
          description="End-to-end solutions tailored to your shipping needs"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
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
  );
}
export default HomeServiceSection