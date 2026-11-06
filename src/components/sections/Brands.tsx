import SectionHeading from "@/components/ui/SectionHeading";

const brands = ["Ashok Leyland", "Eicher", "Tata", "Mahindra"];

export default function Brands() {
  return (
    <section className="border-y border-[#E5EAF0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Brands we support"
            title="Commercial vehicles from familiar names."
          />
          <p className="max-w-md text-sm leading-6 text-[#617181]">
            Supported vehicle brands include the following. Brand names are
            shown for identification only; no manufacturer affiliation is
            implied.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-2 border-l border-t border-[#E5EAF0] sm:grid-cols-4">
          {brands.map((brand) => (
            <li
              key={brand}
              className="flex min-h-24 items-center justify-center border-b border-r border-[#E5EAF0] px-4 text-center font-heading text-lg font-bold tracking-tight text-[#33475B] sm:min-h-28 sm:text-xl"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
