"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SecondaryButton } from "./CtaButton";
import ServiceCard, {type ServiceIcon } from "./ServiceCard";
import HomeSectionHeader from "./HomeSectionHeader";

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
        <HomeSectionHeader
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

        <motion.div className="mt-10 text-center"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}>
          <SecondaryButton href="/services">
            View All Services
            <ArrowRight className="ml-2 size-4" />
          </SecondaryButton>
        </motion.div>
      </div>
    </section>
  );
}
export default HomeServiceSection;