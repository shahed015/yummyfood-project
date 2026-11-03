"use client";

import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="section-spacing bg-primary text-secondary"
    >
      <div className="container-custom grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <Reveal
            as="p"
            duration={0.55}
            className="text-sm font-medium uppercase tracking-wide"
          >
            Stay in the loop
          </Reveal>
          <Reveal
            as="h2"
            id="newsletter-heading"
            duration={0.55}
            delay={0.07}
            className="max-w-xl font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-tight"
          >
            Delicious Updates, Straight to Your Inbox.
          </Reveal>
          <Reveal
            as="p"
            duration={0.55}
            delay={0.14}
            className="max-w-md text-base leading-relaxed text-secondary/80"
          >
            Get the latest menu highlights, special offers, and delicious
            inspiration delivered straight to your inbox.
          </Reveal>
        </div>

        <Reveal duration={0.55} delay={0.2} className="min-w-0">
          <form className="flex flex-col gap-3">
            <label className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email address"
                className="h-12 w-full min-w-0 rounded-input border border-transparent bg-surface px-4 text-base text-text placeholder:text-text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-60"
              />
              <Button
                type="submit"
                variant="onPrimary"
                className="h-12 w-full sm:w-auto"
              >
                Suscribe
              </Button>
            </div>

            <p className="text-sm text-secondary/80">
              No spam. Just delicious updates.
            </p>

            <p
              role="status"
              aria-live="polite"
              className={`min-h-5 text-sm text-secondary`}
            ></p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
