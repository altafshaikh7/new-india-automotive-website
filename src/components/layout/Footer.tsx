import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insurance assistance", href: "/insurance" },
  { label: "Gallery", href: "/gallery" },
  { label: "Awards", href: "/awards" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B2033] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-12 lg:py-14">
        <div>
          <Link
            href="/"
            aria-label="New India Automotive home"
            className="inline-flex items-center"
          >
            <span className="relative block h-16 w-16 shrink-0 bg-white p-0.5">
              <Image
                src="/images/nia-logo.png"
                alt=""
                fill
                sizes="64px"
                className="object-contain"
              />
            </span>
            <span className="ml-2 font-heading text-xs font-extrabold leading-5 tracking-[0.12em]">
              NEW INDIA
              <br />
              AUTOMOTIVE
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
            Commercial vehicle accident repair and workshop support in the
            Bhiwandi and Mumbai region.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            Explore
          </p>
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {label} <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-4 text-xs text-white/45 sm:px-8 lg:px-12">
          © {new Date().getFullYear()} New India Automotive
        </div>
      </div>
    </footer>
  );
}
