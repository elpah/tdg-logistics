// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Contact", href: "/contact" },
// ];

// export function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-0">
//         <Link href="/" className="flex items-center gap-2">
//           <div className="size-12 rounded-sm bg-primary flex items-center justify-center">
//             <span className="text-primary-foreground font-bold text-sm">
//               TDG
//             </span>
//           </div>
//           <span className="text-lg font-semibold tracking-tight">
//             TDG Shipping & Logistics
//           </span>
//         </Link>

//         <div className="hidden lg:flex lg:items-center lg:gap-x-8">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 pathname === item.href
//                   ? "text-primary"
//                   : "text-muted-foreground"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         <div className="hidden lg:flex lg:items-center lg:gap-4">
//           <button className="p-2 bg-primary rounded-sm text-primary-foreground text-accent-foreground hover:bg-primary/90">
//             Request Quote
//           </button>
//         </div>

//         <button
//           type="button"
//           className="lg:hidden p-2 -mr-2"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <span className="sr-only">Toggle menu</span>
//           {mobileMenuOpen ? (
//             <X className="size-5" />
//           ) : (
//             <Menu className="size-5" />
//           )}
//         </button>
//       </nav>

//       {mobileMenuOpen && (
//         <div className="lg:hidden border-t border-border bg-background">
//           <div className="px-6 py-4 space-y-1">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`block py-2 text-sm font-medium ${
//                   pathname === item.href
//                     ? "text-primary"
//                     : "text-muted-foreground"
//                 }`}
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <div className="pt-4">
//               <button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
//                 WhatsApp Us
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

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

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-sm bg-primary">
            <span className="text-sm font-bold text-primary-foreground">
              TDG
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold tracking-tight md:hidden">TDG</span>

            <span className="hidden font-semibold tracking-tight md:block">
              TDG Shipping & Logistics
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
          <button className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
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
}
