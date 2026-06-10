"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { QuoteButton } from "./CtaButton";

const HomeHero = () => {
  return (
    <section className="relative pt-20">
      <div className="relative min-h-175 lg:min-h-200 w-full overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dvwpuenzk/image/upload/v1780970061/home_e5rxhi.avif"
          alt="Global shipping and logistics operations"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-primary/20" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl ">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.65 }}
            >
              {/* Badge */}
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs md:text-sm md:py-2 font-medium text-white backdrop-blur-sm">
                Global Logistics Solutions
              </span>

              {/* Heading */}
              <h1 className="mt-6 font-extrabold tracking-normal text-primary-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2]">
                Simplifying Imports
                <br />
                from China to Ghana{" "}
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                Whether you're buying from factories, wholesalers, or online
                marketplaces, our team receives, stores, and ships your goods
                safely from China to Ghana.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <QuoteButton />

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-sm bg-white/10 px-6 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
