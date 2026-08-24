"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SecondaryButton } from "./CtaButton";
import HomeSectionHeader from "./HomeSectionHeader";
import ChecklistItem from "./ChecklistItem";

interface HomeWhyChooseUsProps {
  reasons: string[];
}

const HomeWhyChooseUs = ({ reasons }: HomeWhyChooseUsProps) => {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-100 overflow-hidden rounded-2xl lg:h-125">
            <Image
              src="https://res.cloudinary.com/dvwpuenzk/image/upload/v1780969759/fleet_rlsi9z.avif"
              alt="Fleet of delivery trucks"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
              className="object-cover"
            />
          </div>

          <div>
            <HomeSectionHeader
              eyebrow="Why Choose Us"
              title="Your Trusted Logistics Partner"
            />

            <motion.p
              className="mb-8 leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              With over 15 years of experience in global shipping, we understand
              what it takes to deliver your cargo safely and on time. Our
              commitment to excellence sets us apart.
            </motion.p>

            <motion.ul
              className="grid gap-4 md:grid-cols-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {reasons.map((reason, index) => (
                <ChecklistItem key={`${reason}-${index}`} index={index}>
                  {reason}
                </ChecklistItem>
              ))}
            </motion.ul>

            <motion.div
              className="mt-8"
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
                delay: 0.7,
              }}
            >
              <SecondaryButton href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 size-4" />
              </SecondaryButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;
