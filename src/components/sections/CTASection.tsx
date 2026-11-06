import { ArrowRight, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="border-t border-white/10 bg-[#183B59] py-16 text-white sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
            Need workshop support?
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Let’s talk about your commercial vehicle.
          </h2>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/65">
            <MapPin size={16} aria-hidden="true" />
            Serving Bhiwandi and the Mumbai region
          </p>
        </div>
        <Button href="/contact" className="shrink-0">
          Contact the workshop <ArrowRight size={17} aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
