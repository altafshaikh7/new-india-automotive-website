import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  "Focused on commercial vehicle repair",
  "Serving the region since 2017",
  "Repair, towing, parts, and claim assistance",
  "Based in the Bhiwandi and Mumbai region",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-24 lg:px-12">
        <div className="relative min-h-[280px] overflow-hidden bg-[#E5EAF0] p-8 sm:min-h-[340px] sm:p-10">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-[#102A43]" />
          <div className="relative flex h-full max-w-sm flex-col justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D92D20]">
              Since 2017
            </span>
            <div className="mt-16 border-l-2 border-[#D92D20] pl-5">
              <p className="font-heading text-3xl font-bold leading-tight tracking-tight text-[#102A43] sm:text-4xl">
                Commercial vehicle work is what we do.
              </p>
              <p className="mt-4 text-sm leading-6 text-[#526273]">
                A local workshop focused on the needs of commercial vehicles.
              </p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Why New India Automotive"
            title="Clear, practical support from workshop to road."
            description="Every vehicle and repair is different. We focus on commercial vehicle needs and help customers understand the services available."
          />
          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-3 text-sm text-[#405265]"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#FCE9E7] text-[#D92D20]">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
