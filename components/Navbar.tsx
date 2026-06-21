"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav className=" px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-sm bg-primary">
              <span className="text-sm font-bold text-primary-foreground">
                TDG
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold tracking-tight md:hidden">
                TDG
              </span>

              <span className="hidden font-semibold tracking-tight md:block">
                TDG's Shipping & Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center">
            <button className=" cursor-pointer rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Request Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="rounded-md p-2 transition-colors hover:bg-muted lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>

            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background shadow-lg lg:hidden">
          <div className="space-y-2 px-6 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-4">
              <button className="w-full rounded-sm bg-primary px-4 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
