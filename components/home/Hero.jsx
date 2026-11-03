import Image from "next/image";
import Link from "next/link";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal.jsx";
import ImageReveal from "@/components/motion/ImageReveal";

const AVATARS = [
  "/img/user-1.jpg",
  "/img/user-2.jpg",
  "/img/user-3.jpg",
  "/img/user-4.jpg",
];

export default function Hero() {
  return (
    <section id="home" className="section-spacing bg-background">
      <div className="container-custom flex flex-col gap-16 lg:gap-24">
        {/* Intro */}
        <div className="flex flex-col gap-6">
          <Reveal
            as="p"
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide"
          >
            <Image
              src="/img/bnner.jpg"
              alt=""
              width={24}
              height={24}
              className="size-6 rounded-full border border-primary object-cover"
              placeholder="blur"
              blurDataURL="..."
            />
            Taste of world class food
          </Reveal>

          {/* Heading text stays static for a fast first paint; only its images animate. */}
          <h1 className="font-heading text-[clamp(2rem,6.4vw,5.5rem)] font-normal uppercase leading-[1.1] tracking-tight">
            <Reveal
              as="span"
              y={-40}
              delay={0.1}
              className="flex flex-wrap items-center gap-x-[0.2em]"
            >
              <span className="flex flex-wrap items-center gap-x-[0.2em]">
                <ImageReveal variant="slide" delay={0.3}>
                  <Image
                    src="/img/bnner-2.jpg"
                    alt=""
                    width={200}
                    height={80}
                    className="h-[0.8em] w-[1.8em] rounded-full border-[3px] border-primary object-cover"
                    placeholder="blur"
                    blurDataURL="..."
                  />
                </ImageReveal>
                <span>Experience</span>
                <ImageReveal variant="pop" delay={0.6} float>
                  <Image
                    src="/img/bnner.jpg"
                    alt=""
                    width={100}
                    height={100}
                    className="size-[1em] rounded-full border-[3px] border-primary object-cover"
                    placeholder="blur"
                    blurDataURL="..."
                  />
                </ImageReveal>
              </span>
            </Reveal>
            <Reveal as="span" y={-40} delay={0.25} className="block">
              Culinary Excellence
            </Reveal>
          </h1>

          <div className="grid items-start gap-6 md:grid-cols-2 md:items-end">
            <Reveal delay={0.5} className="flex flex-col items-start gap-6">
              <p className="max-w-sm text-base leading-relaxed text-text-muted">
                A good restaurant is like a vacation, it transports you, and it
                becomes a lot more than just about the food
              </p>
              <Button href="#menu" className="w-full md:w-auto">
                Our Delicious Item
              </Button>
            </Reveal>

            <div className="relative flex items-center gap-3 md:justify-end">
              <Reveal
                delay={1}
                y={0}
                className="absolute -left-2 -top-10 hidden md:block lg:-left-24 lg:top-0"
              >
                <PiArrowBendUpRightBold
                  aria-hidden="true"
                  className="text-5xl text-primary"
                />
              </Reveal>

              <div className="flex -space-x-3">
                {AVATARS.map((src, i) => (
                  <Reveal key={src} delay={0.8 + i * 0.08} y={0} scale={0.5}>
                    <Image
                      src={src}
                      alt={`Customer ${i + 1}`}
                      width={44}
                      height={44}
                      className="size-11 rounded-full border-2 border-surface object-cover"
                      placeholder="blur"
                      blurDataURL="..."
                    />
                  </Reveal>
                ))}
              </div>

              <Reveal delay={1.1}>
                <p className="text-2xl font-medium leading-none">10K+</p>
                <p className="text-sm text-text-muted">Trusted by Families</p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Signature dish (reveals on scroll) */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal inView y={30} className="flex flex-col gap-4">
            <h2 className="flex flex-wrap items-center gap-x-3 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-tight">
              <span>Succulent Signature Baked Lamb</span>
              <Image
                src="/img/hero-3.webp"
                alt=""
                width={56}
                height={56}
                className="size-10 rounded-full border-2 border-primary object-cover md:size-14"
                placeholder="blur"
                blurDataURL="..."
              />
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-text-muted">
              Savor the rich flavors of our perfectly baked whole lamb, seasoned
              with aromatic herbs and served with gourmet sides for an
              unforgettable dining experience.
            </p>
          </Reveal>

          <Reveal
            inView
            y={0}
            scale={0.85}
            className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-primary lg:ml-auto lg:mr-0"
          >
            <Image
              src="/img/hero-banner.jpg"
              alt="Succulent signature baked lamb"
              width={800}
              height={800}
              className="absolute left-[6%] top-[6%] size-[88%] rounded-full object-cover"
              placeholder="blur"
              blurDataURL="..."
            />
            <Reveal
              inView
              y={0}
              scale={0.5}
              delay={0.5}
              className="absolute bottom-[4%] left-[2%]"
            >
              <Link
                href="#menu"
                className="grid size-20 place-items-center rounded-full bg-secondary text-sm text-white underline transition-colors duration-200 hover:bg-text-muted md:size-24"
              >
                View item
              </Link>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
