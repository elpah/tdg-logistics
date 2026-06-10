"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const HomeSectionHeader = ({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-2xl text-center"
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
      <p className="mb-2 font-medium text-primary">{eyebrow}</p>

      <h2 className="text-2xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
};

export default HomeSectionHeader;
