"use client";

import { motion } from "framer-motion";

import { QuoteButton } from "../home/CtaButton";
type CTAProps = {
  title: string;
  paragraph: string;
};
const CTA = ({ title, paragraph }: CTAProps) => {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center shadow-md md:px-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground lg:text-5xl"
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
            }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-md md:text-lg leading-relaxed text-primary-foreground/90"
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
            }}
          >
            {paragraph}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
              duration: 0.4,
              delay: 0.3,
            }}
          >
            <QuoteButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
