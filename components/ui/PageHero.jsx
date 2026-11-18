export default function PageHero({ title, description }) {
  return (
    <section
      aria-labelledby="page-hero-heading"
      className="bg-background pb-6 pt-10 md:pb-10 md:pt-14"
    >
      <div className="container-custom flex flex-col items-center gap-4 text-center">
        <h1
          id="page-hero-heading"
          className="font-heading text-[clamp(3rem,13vw,9.5rem)] font-normal uppercase leading-none tracking-tight"
        >
          {title}
        </h1>
        {description && (
          <p className="max-w-xl text-base leading-relaxed text-text-muted">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
