"use client";

import { getImageProps } from "next/image";
import heroImageLoader, { mobileHeroSrcSet } from "@/lib/heroImageLoader";

type HeroImageProps = {
  src: string;
  alt: string;
};

const MOBILE_MEDIA = "(max-width: 767px)";
const DESKTOP_MEDIA = "(min-width: 768px)";

export default function HeroImage({ src, alt }: HeroImageProps) {
  const mobileSrcSet = mobileHeroSrcSet(src);

  const {
    props: { srcSet: desktopSrcSet, sizes, ...img },
  } = getImageProps({
    src,
    alt,
    fill: true,
    sizes: "100vw",
    preload: true,
    loader: heroImageLoader,
    className: "object-cover",
  });

  return (
    <>
      <link
        rel="preload"
        as="image"
        imageSrcSet={mobileSrcSet}
        imageSizes="100vw"
        media={MOBILE_MEDIA}
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        imageSrcSet={desktopSrcSet}
        imageSizes={sizes}
        media={DESKTOP_MEDIA}
        fetchPriority="high"
      />
      <picture className="absolute inset-0 block overflow-hidden">
        <source media={MOBILE_MEDIA} srcSet={mobileSrcSet} sizes="100vw" />
        <img {...img} alt={alt} srcSet={desktopSrcSet} sizes={sizes} />
      </picture>
    </>
  );
}
