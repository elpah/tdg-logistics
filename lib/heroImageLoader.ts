import type { ImageLoaderProps } from "next/image";

const UPLOAD_MARKER = "/image/upload/";
const MAX_HERO_WIDTH = 1920;
export const MAX_MOBILE_HERO_WIDTH = 828;
export const MOBILE_HERO_WIDTHS = [640, 750, 828] as const;

export function heroImageUrl(src: string, width: number): string {
  const cappedWidth = Math.min(width, MAX_HERO_WIDTH);
  const params = ["f_avif", "c_limit", `w_${cappedWidth}`, "q_auto"].join(",");

  const uploadIndex = src.indexOf(UPLOAD_MARKER);
  if (uploadIndex === -1) {
    return src;
  }

  const prefix = src.slice(0, uploadIndex + UPLOAD_MARKER.length);
  const path = src.slice(uploadIndex + UPLOAD_MARKER.length);
  return `${prefix}${params}/${path}`;
}

export default function heroImageLoader({ src, width }: ImageLoaderProps) {
  return heroImageUrl(src, width);
}

export function mobileHeroSrcSet(src: string): string {
  return MOBILE_HERO_WIDTHS.map(
    (width) => `${heroImageUrl(src, width)} ${width}w`,
  ).join(", ");
}
