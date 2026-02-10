"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/our-websites", label: "Our Websites" },
  { href: "/our-apps", label: "Our Apps" },
  { href: "/contact", label: "Contact" },
  { href: "/carreers", label: "Carreers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto max-w-6xl h-20 md:h-16 px-8 md:px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-trek-vertical.svg" alt="Trek" width={68} height={40} priority />
          <span className="sr-only">Trek Mobi</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10 font-[500] text-[16px]">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-white/90 hover:text-white transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden grid gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <ul className="mx-auto max-w-6xl px-8 py-3 space-y-3 font-[500] text-[18px]">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-2 text-white/90">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}