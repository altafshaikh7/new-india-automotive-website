type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
          light ? "text-red-300" : "text-[#D92D20]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl ${
          light ? "text-white" : "text-[#102A43]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? "text-white/70" : "text-[#526273]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
