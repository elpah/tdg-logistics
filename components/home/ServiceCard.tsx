"use client";

import { motion } from "framer-motion";
import { Ship, Plane, Package, Warehouse } from "lucide-react";

const icons = {
  ship: Ship,
  plane: Plane,
  package: Package,
  warehouse: Warehouse,
};

export type ServiceIcon = keyof typeof icons;

interface ServiceCardProps {
  icon: ServiceIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const Icon = icons[icon];

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
      className="h-full"
    >
      <div className="group h-full rounded-xl border border-border bg-card p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-px hover:border-primary/25 hover:shadow-sm motion-reduce:transition-none motion-reduce:hover:translate-y-0">
        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="size-6 text-primary" />
        </div>

        <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
