import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-sm border border-border bg-background px-6 py-4 font-medium transition-colors hover:bg-muted"
    >
      {children}
    </Link>
  );
}

export const QuoteButton = () => {
  return (
    <Link
      href="/contact"
      className="flex items-center rounded-sm bg-white/70 px-6 py-4 text-base font-bold text-primary hover:bg-white/90 transition-all"
    >
      Get a Free Quote
      <ArrowRight className="ml-2 size-5" />
    </Link>
  );
};
