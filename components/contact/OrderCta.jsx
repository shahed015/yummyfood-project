import Image from "next/image";
import Button from "@/components/ui/Button";
import LineEyebrow from "@/components/ui/LineEyebrow";

const CTA_IMAGE = "/img/hero-1.webp";

export default function OrderCta() {
  return (
    <section
      aria-labelledby="order-cta-heading"
      className="section-spacing relative isolate flex min-h-80 items-center overflow-hidden lg:min-h-96"
    >
      <Image
        src={CTA_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-secondary/70"
      />

      <div className="container-custom flex flex-col items-center gap-5 text-center text-background">
        <LineEyebrow centered>Hungry?</LineEyebrow>
        <h2
          id="order-cta-heading"
          className="font-heading text-[clamp(2.25rem,6vw,4.5rem)] font-normal leading-[1.1] tracking-tight"
        >
          Order Food Now
        </h2>
        <Button
          href="/#menu"
          variant="onDark"
          className="mt-2 w-full sm:w-auto"
        >
          Browse The Menu
        </Button>
      </div>
    </section>
  );
}
