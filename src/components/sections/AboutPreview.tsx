import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12">
        <SectionHeading
          eyebrow="About NIA"
          title="A commercial vehicle workshop rooted in the region."
        />
        <div className="max-w-2xl">
          <p className="text-lg leading-8 text-[#526273]">
            New India Automotive has been serving commercial vehicle owners
            since 2017. Based in the Bhiwandi and Mumbai region, the workshop
            focuses on accident repair and practical support through the repair
            process.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#102A43] transition-colors hover:text-[#D92D20]"
          >
            More about NIA <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
