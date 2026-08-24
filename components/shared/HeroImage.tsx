"use client";

import Image from "next/image";
import heroImageLoader from "@/lib/heroImageLoader";

type HeroImageProps = {
  src: string;
  alt: string;
};

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="100vw"
      priority
      loader={heroImageLoader}
      className="object-cover"
    />
  );
}
