export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-background pb-6 pt-10 md:pb-10 md:pt-14"
    >
      <div className="container-custom">
        <h1
          id="about-heading"
          className="text-center font-heading text-[clamp(3rem,13vw,9.5rem)] font-normal uppercase leading-none tracking-tight"
        >
          About Us
        </h1>
      </div>
    </section>
  );
}
