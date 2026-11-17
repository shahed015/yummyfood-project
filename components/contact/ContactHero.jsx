import Image from "next/image";

const HERO_IMAGE = "/img/hero-banner.jpg";

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative isolate flex min-h-[40vh] items-center justify-center overflow-hidden lg:min-h-[50vh]"
    >
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-secondary/70"
      />

      <div className="container-custom py-16">
        <h1
          id="contact-hero-heading"
          className="text-center font-heading text-[clamp(2.5rem,8vw,6rem)] font-normal uppercase leading-none tracking-tight text-background"
        >
          Contact Us
        </h1>
      </div>
    </section>
  );
}
