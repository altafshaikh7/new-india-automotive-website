import Link from "next/link";
import { ArrowUpRight, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AwardsPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-12">
        <SectionHeading
          eyebrow="Awards & recognition"
          title="Recognition, shared with the details that matter."
          description="Verified award information has not yet been provided for this website."
        />
        <div className="flex flex-col gap-5 border border-[#E5EAF0] bg-[#F7F8FA] p-7 sm:flex-row sm:items-start sm:p-9">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#D92D20]">
            <Award size={24} strokeWidth={1.7} aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-heading text-lg font-bold text-[#102A43]">
              Developer note: add verified recognition
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#617181]">
              Add the award or certificate name, issuing organization, year,
              and a clear image before publishing recognition claims.
            </p>
            <Link
              href="/awards"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#102A43] transition-colors hover:text-[#D92D20]"
            >
              Awards information <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
