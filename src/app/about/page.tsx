import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about New India Automotive, a commercial vehicle repair workshop serving the Bhiwandi and Mumbai region since 2017.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About New India Automotive"
        title="Commercial vehicle workshop support in the Bhiwandi region."
        description="Established in 2017, New India Automotive provides commercial vehicle accident repair and related workshop services in the Bhiwandi and Mumbai region."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D92D20]">
              Our focus
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-[#102A43]">
              Keeping commercial vehicle repair straightforward.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-[#526273]">
            <p>
              NIA supports commercial vehicle owners with accident repair,
              towing, genuine spare parts, and assistance with repair-related
              insurance claim steps.
            </p>
            <p>
              The workshop supports Ashok Leyland, Eicher, Tata, and Mahindra
              vehicles. Brand names identify supported vehicles only; no
              manufacturer affiliation is implied.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
