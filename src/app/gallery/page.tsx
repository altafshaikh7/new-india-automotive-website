import type { Metadata } from "next";
import { Image as ImageIcon } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "New India Automotive workshop gallery. Genuine workshop and repair photographs are being prepared.",
};

const photoSlots = [
  "Workshop exterior",
  "Service bays",
  "Commercial vehicle repair",
  "Parts and workshop details",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshop gallery"
        title="A closer look at the work."
        description="This gallery is ready for genuine New India Automotive workshop and repair photographs."
      />
      <section className="bg-[#F7F8FA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {photoSlots.map((slot, index) => (
              <div
                key={slot}
                className={`flex min-h-56 flex-col justify-between border border-[#DCE3EA] p-6 sm:min-h-72 sm:p-8 ${
                  index % 2 === 0 ? "bg-[#E5EAF0]" : "bg-[#EEF1F4]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <ImageIcon
                    size={22}
                    className="text-[#738292]"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6D7B89]">
                    Image needed
                  </span>
                </div>
                <div>
                  <h2 className="font-heading text-lg font-bold text-[#102A43]">
                    {slot}
                  </h2>
                  <p className="mt-2 text-sm text-[#617181]">
                    Developer placeholder — add an approved NIA photograph.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
