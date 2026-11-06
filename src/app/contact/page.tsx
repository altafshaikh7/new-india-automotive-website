import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact New India Automotive for commercial vehicle workshop support in the Bhiwandi and Mumbai region.",
};

const contactPlaceholders = [
  {
    icon: Phone,
    title: "Phone",
    description: "Add the verified workshop phone number.",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Add the verified business email address.",
  },
  {
    icon: MapPin,
    title: "Workshop address",
    description: "Add the complete verified workshop address.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact the workshop"
        title="Let’s talk about your commercial vehicle."
        description="New India Automotive serves the Bhiwandi and Mumbai region. Verified contact details are needed to complete this page."
      />
      <section className="bg-[#F7F8FA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 max-w-3xl border-l-2 border-[#D92D20] bg-white p-5 text-sm leading-6 text-[#526273]">
            Developer note: replace the placeholders below with approved
            business contact information before publishing. No phone number,
            email, or street address was provided.
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {contactPlaceholders.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="border border-[#E1E6EC] bg-white p-7"
              >
                <Icon
                  size={23}
                  className="text-[#D92D20]"
                  aria-hidden="true"
                />
                <h2 className="mt-5 font-heading text-lg font-bold text-[#102A43]">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#617181]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
