import Link from "next/link";
import {
  ArrowUpRight,
  CarFront,
  ClipboardCheck,
  Cog,
  Truck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const services = [
  {
    icon: CarFront,
    title: "Accident repair",
    description:
      "Repair support for commercial vehicles following accidental damage.",
  },
  {
    icon: Truck,
    title: "Towing support",
    description:
      "Towing assistance for commercial vehicles when they cannot continue their journey.",
  },
  {
    icon: ClipboardCheck,
    title: "Insurance claim assistance",
    description:
      "Guidance with repair-related claim steps. NIA is not an insurer.",
  },
  {
    icon: Cog,
    title: "Genuine spare parts",
    description:
      "Genuine spare parts support for the commercial vehicle brands served.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-[#F7F8FA] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Support for the work your vehicle does."
            description="A focused set of commercial vehicle workshop services, all under one roof."
          />
          <Link
            href="/services"
            className="mb-1 inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#102A43] transition-colors hover:text-[#D92D20]"
          >
            View all services <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid gap-px border border-[#DCE3EA] bg-[#DCE3EA] sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="bg-white p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <Icon
                  size={25}
                  strokeWidth={1.7}
                  className="text-[#D92D20]"
                  aria-hidden="true"
                />
                <span className="font-heading text-xs font-semibold tracking-widest text-[#9AA7B4]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-8 text-lg font-bold text-[#102A43]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#617181]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
