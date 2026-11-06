import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/components/sections/ServicesPreview";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial vehicle accident repair, towing, insurance claim assistance, and genuine spare parts from New India Automotive.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshop services"
        title="Practical support for commercial vehicles."
        description="Explore the services available from New India Automotive in the Bhiwandi and Mumbai region."
      />
      <section className="bg-[#F7F8FA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-4 md:grid-cols-2">
            {services.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="border border-[#E1E6EC] bg-white p-7 sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                    className="text-[#D92D20]"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold tracking-widest text-[#9AA7B4]">
                    SERVICE 0{index + 1}
                  </span>
                </div>
                <h2 className="mt-7 font-heading text-xl font-bold text-[#102A43]">
                  {title}
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#617181]">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-[#617181]">
            Available repair scope, parts, and towing arrangements depend on
            the vehicle and its requirements. Contact the workshop to discuss
            your specific need.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 bg-[#D92D20] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#B92319]"
          >
            Discuss a service <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
