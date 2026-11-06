import type { Metadata } from "next";
import { Award } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description:
    "Awards and recognition for New India Automotive. Verified award details will be added when supplied.",
};

export default function AwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Awards & recognition"
        title="Recognition, presented accurately."
        description="No verified award or certificate details have been supplied for publication yet."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex max-w-3xl gap-5 border border-[#E5EAF0] bg-[#F7F8FA] p-7 sm:p-9">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#D92D20]">
              <Award size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-heading text-lg font-bold text-[#102A43]">
                Developer placeholder
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#617181]">
                Add the verified award or certificate title, issuing
                organization, year, and supporting image here. Do not publish
                unverified recognition claims.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
