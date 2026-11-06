type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="bg-[#102A43] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
