import { ArrowRight, ClipboardCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function InsurancePreview() {
  return (
    <section className="bg-[#102A43] py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:px-12">
        <div>
          <SectionHeading
            eyebrow="Insurance claim assistance"
            title="Help navigating repair-related claim steps."
            description="After an accident, it can be difficult to know what to do next. Ask the NIA team about assistance with the repair and claim process."
            light
          />
          <Button href="/insurance" variant="light" className="mt-8">
            Understand the process <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
        <div className="border border-white/15 bg-white/[0.04] p-7 sm:p-9">
          <ClipboardCheck
            size={28}
            strokeWidth={1.6}
            className="text-red-300"
            aria-hidden="true"
          />
          <h3 className="mt-6 text-lg font-bold">A clear distinction</h3>
          <p className="mt-3 text-sm leading-6 text-white/65">
            New India Automotive provides repair-related assistance. It is not
            an insurance company, and no insurance partnerships are claimed
            here.
          </p>
        </div>
      </div>
    </section>
  );
}
