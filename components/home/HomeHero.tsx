"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { QuoteButton } from "./CtaButton";

const HomeHero = () => {
  return (
    <section className="relative pt-20">
      <div className="relative min-h-175 w-full overflow-hidden lg:min-h-200">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dvwpuenzk/image/upload/v1780970061/home_e5rxhi.avif"
            alt="Global shipping and logistics operations"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-primary/20" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-white backdrop-blur-sm md:py-2 md:text-sm"
              >
                Global Logistics Solutions
              </motion.span>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-4xl font-extrabold leading-[1.2] tracking-normal text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Simplifying Imports
                <br />
                from China to Ghana
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-lg md:text-xl"
              >
                Whether you're buying from factories, wholesalers, or online
                marketplaces, our team receives, stores, and ships your goods
                safely from China to Ghana.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <QuoteButton />

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-sm bg-white/10 px-6 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
