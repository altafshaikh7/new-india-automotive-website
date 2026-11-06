import type { Metadata } from "next";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Insurance Claim Assistance",
  description:
    "Learn about repair-related insurance claim assistance from New India Automotive. NIA is not an insurer.",
};

export default function InsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Insurance claim assistance"
        title="Support with the repair-related claim process."
        description="New India Automotive can assist customers with questions around insurance claim steps related to vehicle repairs."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-12">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#102A43]">
              Talk to the workshop about your repair
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#526273]">
              Each claim is managed according to the customer’s policy and the
              insurer’s process. Contact NIA to discuss the repair; confirm
              coverage, approvals, documentation, and claim decisions directly
              with your insurer.
            </p>
          </div>
          <aside className="border border-[#E5EAF0] bg-[#F7F8FA] p-7 sm:p-8">
            <ClipboardCheck
              size={25}
              className="text-[#D92D20]"
              aria-hidden="true"
            />
            <h2 className="mt-5 font-heading text-lg font-bold text-[#102A43]">
              Important
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#617181]">
              New India Automotive is a repair workshop, not an insurance
              company. No insurer partnerships or claim outcomes are promised
              on this website.
            </p>
          </aside>
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-8 lg:px-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D92D20] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#B92319]"
          >
            Contact the workshop <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
