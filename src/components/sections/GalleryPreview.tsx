import Link from "next/link";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GalleryPreview() {
  return (
    <section className="bg-[#F7F8FA] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Workshop gallery"
            title="See the people and work behind the service."
            description="Real workshop photography will help customers see the facility and repair work for themselves."
          />
          <Link
            href="/gallery"
            className="mb-1 inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#102A43] transition-colors hover:text-[#D92D20]"
          >
            Visit the gallery <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {["Workshop exterior and service bays", "Repair work in progress"].map(
            (label, index) => (
              <div
                key={label}
                className={`flex min-h-52 flex-col justify-between border border-[#DCE3EA] p-6 sm:min-h-64 sm:p-8 ${
                  index === 0 ? "bg-[#E5EAF0]" : "bg-[#EEF1F4]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <ImageIcon
                    size={21}
                    className="text-[#738292]"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6D7B89]">
                    Photo placeholder
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#102A43]">
                    {label}
                  </h3>
                  <p className="mt-2 text-sm text-[#617181]">
                    Add a genuine NIA photograph here.
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
