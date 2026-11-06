import type { Metadata } from "next";
import AboutPreview from "@/components/sections/AboutPreview";
import AwardsPreview from "@/components/sections/AwardsPreview";
import Brands from "@/components/sections/Brands";
import CTASection from "@/components/sections/CTASection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Hero from "@/components/sections/Hero";
import InsurancePreview from "@/components/sections/InsurancePreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "Commercial Vehicle Repair in Bhiwandi",
  description:
    "New India Automotive provides commercial vehicle accident repair, towing, insurance claim assistance, and spare parts in the Bhiwandi and Mumbai region.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <Brands />
      <WhyChooseUs />
      <InsurancePreview />
      <GalleryPreview />
      <AwardsPreview />
      <CTASection />
    </>
  );
}
