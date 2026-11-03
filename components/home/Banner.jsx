import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function Banner() {
  return (
    <section
      id="banner"
      aria-labelledby="banner-heading"
      className="bg-surface pb-(--section-spacing)"
    >
      <div className="grid lg:grid-cols-2">
        {/* Dark box stays in place; only its text enters from the left */}
        <div className="flex min-w-0 flex-col items-start justify-center gap-5 bg-secondary p-8 py-20 text-white md:p-12 md:py-28 lg:p-16 lg:py-32">
          <Reveal
            as="p"
            direction="left"
            duration={0.55}
            className="text-sm font-medium uppercase tracking-wide text-primary"
          >
            More than a meal
          </Reveal>

          <Reveal
            as="h2"
            id="banner-heading"
            direction="left"
            duration={0.55}
            delay={0.07}
            className="font-heading text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-tight"
          >
            Dining Is More Than Just A Meal. It&rsquo;s An Experience.
          </Reveal>

          <Reveal
            as="p"
            direction="left"
            duration={0.55}
            delay={0.14}
            className="max-w-xl text-base leading-relaxed text-white/70"
          >
            From carefully chosen ingredients to a smooth ordering experience,
            we focus on creating moments worth sharing at your table.
          </Reveal>

          <Reveal
            direction="left"
            duration={0.55}
            delay={0.21}
            className="mt-2 w-full sm:w-auto"
          >
            <Button href="/menu" variant="onDark" className="w-full sm:w-auto">
              Order Now
            </Button>
          </Reveal>
        </div>

        {/* Image: fades in, existing hover effect retained */}
        <Reveal
          direction="none"
          duration={0.6}
          delay={0.1}
          className="group relative isolate flex min-h-112 items-center justify-center overflow-hidden lg:min-h-144"
        >
          <Image
            src="/img/hero-banner.jpg"
            alt="Freshly prepared grilled food served with sides"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="-z-20 object-cover transition-[filter,scale] duration-500 ease-out group-hover:scale-105 group-hover:blur-sm motion-reduce:transition-none [@media(hover:none)]:scale-105 [@media(hover:none)]:blur-sm"
            placeholder="blur"
            blurDataURL="..."
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-secondary/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none [@media(hover:none)]:opacity-100"
          />

          <div className="flex max-w-sm translate-y-3 flex-col items-center gap-2 p-8 text-center text-white opacity-0 transition-[opacity,translate] duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Fresh. Warm. Made to share.
            </p>

            <h3 className="font-heading text-3xl font-normal leading-tight">
              Made With Care, Delivered To Your Door.
            </h3>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
