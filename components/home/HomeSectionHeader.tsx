"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

const HomeSectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <motion.div
      className={
        align === "left"
          ? "mb-8 max-w-2xl text-left"
          : "mx-auto mb-10 max-w-2xl text-center"
      }
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
      <p className="mb-2 text-sm font-medium tracking-wide text-primary">{eyebrow}</p>

      <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
};

export default HomeSectionHeader;
