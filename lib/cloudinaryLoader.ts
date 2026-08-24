import type { ImageLoaderProps } from "next/image";

const UPLOAD_MARKER = "/image/upload/";

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const params = [
    "f_auto",
    "c_limit",
    `w_${width}`,
    `q_${quality ?? "auto"}`,
  ].join(",");

  const uploadIndex = src.indexOf(UPLOAD_MARKER);
  if (uploadIndex === -1) {
    return src;
  }

  const prefix = src.slice(0, uploadIndex + UPLOAD_MARKER.length);
  const path = src.slice(uploadIndex + UPLOAD_MARKER.length);
  return `${prefix}${params}/${path}`;
}
