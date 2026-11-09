export default function SectionIntro({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  className = "",
}) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl items-center text-center" : "";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-tight"
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-md text-base leading-relaxed text-text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
