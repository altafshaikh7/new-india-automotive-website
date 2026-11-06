
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insurance", href: "/insurance" },
  { label: "Gallery", href: "/gallery" },
  { label: "Awards", href: "/awards" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#102A43] text-white shadow-[0_4px_24px_rgba(16,42,67,0.12)]">
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="New India Automotive Home"
          className="group flex h-[72px] shrink-0 items-center"
        >
          <span className="relative block h-[62px] w-[62px] shrink-0 bg-white p-0.5">
            <Image
              src="/images/nia-logo.png"
              alt=""
              fill
              priority
              sizes="68px"
              className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </span>
          <span className="ml-2 font-heading text-[12px] font-extrabold leading-[1.25] tracking-[0.12em] text-white sm:text-[13px]">
            NEW INDIA
            <br />
            AUTOMOTIVE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative py-2 text-[16px] font-medium tracking-[0.01em] transition-colors duration-200 ${
                  isActive ? "text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#D92D20] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Contact CTA */}
        <Link
          href="/contact"
          className="group hidden items-center gap-2 rounded-md bg-[#D92D20] px-5 py-3.5 text-[15px] font-semibold tracking-wide text-white shadow-[0_5px_16px_rgba(217,45,32,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B92319] hover:shadow-[0_8px_22px_rgba(217,45,32,0.28)] xl:inline-flex"
        >
          Enquire
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 transition-colors duration-200 hover:border-[#D92D20] hover:bg-white/5 xl:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out xl:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
          className="min-h-0"
          inert={!isOpen}
        >
          <div className="border-t border-white/10 px-5 pb-5 pt-3 sm:px-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-white/[0.07] py-4 text-[16px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ArrowUpRight
                    size={17}
                    className="text-white/35 transition-colors"
                  />
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-md bg-[#D92D20] px-5 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#B92319]"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
