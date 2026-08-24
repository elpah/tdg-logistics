import type { ImageLoaderProps } from "next/image";

const UPLOAD_MARKER = "/image/upload/";
const MAX_HERO_WIDTH = 1920;

export default function heroImageLoader({ src, width }: ImageLoaderProps) {
  const cappedWidth = Math.min(width, MAX_HERO_WIDTH);
  const params = [
    "f_avif",
    "c_limit",
    `w_${cappedWidth}`,
    "q_auto",
  ].join(",");

  const uploadIndex = src.indexOf(UPLOAD_MARKER);
  if (uploadIndex === -1) {
    return src;
  }

  const prefix = src.slice(0, uploadIndex + UPLOAD_MARKER.length);
  const path = src.slice(uploadIndex + UPLOAD_MARKER.length);
  return `${prefix}${params}/${path}`;
}
