"use client";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

type ChecklistItemProps = {
  children: React.ReactNode;
  index: number;
};
const ChecklistItem = ({ children, index }: ChecklistItemProps) => {
  return (
    <motion.li
      className="flex min-w-0 items-center gap-3"
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
        delay: index * 0.14,
      }}
    >
      <CheckCircle className="size-5 shrink-0 text-primary" />
      <span>{children}</span>
    </motion.li>
  );
};

export default ChecklistItem;
