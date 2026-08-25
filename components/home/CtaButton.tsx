import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const SecondaryButton =({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
})=> {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-sm border border-border bg-background px-6 py-4 font-medium transition-colors hover:border-primary/30 hover:bg-muted"
    >
      {children}
    </Link>
  );
}

export const QuoteButton = () => {
  return (
    <Link
      href="/contact"
      className="flex items-center  justify-center  rounded-sm bg-white/90 px-4 py-3 md:px-6 md:py-4 text-base font-bold text-primary hover:bg-white transition-all"
    >
      Get a Free Quote
      <ArrowRight className="ml-2 size-5" />
    </Link>
  );
};
