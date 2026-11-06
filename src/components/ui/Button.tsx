import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-[#D92D20] text-white hover:bg-[#B92319] focus-visible:outline-white",
  outline:
    "border border-white/35 text-white hover:border-white hover:bg-white/10",
  light: "bg-white text-[#102A43] hover:bg-[#E5EAF0]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-bold transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
