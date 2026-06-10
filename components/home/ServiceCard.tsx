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
      className="group rounded-xl border border-border bg-card p-6 transition-shadow duration-300 hover:border-primary/30 hover:shadow-lg"
    >
      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="size-6 text-primary" />
      </div>

      <h3 className="mb-2 text-lg font-semibold">{title}</h3>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
