"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

const ProcessStep = ({
  number,
  title,
  description,
  index,
}: ProcessStepProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.12,
      }}
    >
      <div className="mb-4 text-6xl font-bold text-primary/10">{number}</div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
};
export default ProcessStep;
