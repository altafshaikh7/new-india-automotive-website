"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const heroImages = [
  "/truck-backgrounds/mahindra-hero.png",
  "/truck-backgrounds/ashok-leyland-hero.png",
  "/truck-backgrounds/eicher-hero.png",
  "/truck-backgrounds/tata-hero.png",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#102A43] text-white sm:min-h-[680px]">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-[72%_center] transition-opacity duration-1000 ease-in-out sm:object-[65%_center] lg:object-center ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081B2C]/90 via-[#102A43]/65 to-[#102A43]/15" />
        <div className="absolute inset-0 bg-[#102A43]/15" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/65">
            <span className="h-px w-8 bg-[#D92D20]" />
            New India Automotive · Bhiwandi
          </p>
          <h1 className="text-[2.65rem] font-bold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-[4.25rem]">
            Commercial vehicle repairs,{" "}
            <span className="text-white/65">with the work done right.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Accident repair, towing support, insurance claim assistance, and
            genuine spare parts for commercial vehicles in the Bhiwandi and
            Mumbai region.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact">
              Discuss a repair <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button href="/services" variant="outline">
              Explore services
            </Button>
          </div>
          <p className="mt-7 text-sm text-white/50">
            Serving commercial vehicles since 2017
          </p>
        </div>
      </div>
    </section>
  );
}
