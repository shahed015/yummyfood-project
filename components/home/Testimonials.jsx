"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MotionConfig, motion } from "motion/react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Reveal from "@/components/motion/Reveal";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Rahim Uddin",
    image: "/img/user-1.jpg",
    date: "Ordered online on 14 Sep, 2026",
    title: "A dining experience to remember",
    review:
      "From the moment I placed my order, everything felt smooth. The food arrived warm, nicely packed, and full of rich, authentic flavors. Truly a place where food meets soul.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Nusrat Jahan",
    image: "/img/user-2.jpg",
    date: "Ordered online on 02 Oct, 2026",
    title: "Flavors that travel well",
    review:
      "Ordered for the first time and I was pleasantly surprised. The meal was fresh, beautifully packed, and tasted just as good as dining in right at my doorstep.",
    rating: 4,
  },
  {
    id: "t3",
    name: "Tanvir Ahmed",
    image: "/img/user-3.jpg",
    date: "Ordered online on 21 Sep, 2026",
    title: "A flavorful family feast",
    review:
      "We ordered for the whole family over the weekend. Every dish had great flavor, the portions were generous, and everyone at the table was happy. Highly recommended.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Farhan Akter",
    image: "/img/user-4.jpg",
    date: "Ordered online on 08 Oct, 2026",
    title: "Simple ordering, delicious food",
    review:
      "Finding my favorite dishes and placing an order was effortless. The food was well prepared and consistent, and I will definitely order again.",
    rating: 5,
  },
];

function Stars({ value }) {
  if (!Number.isInteger(value) || value < 1 || value > 5) return null;

  return (
    <div>
      <p className="sr-only">Rated {value} out of 5</p>
      <div aria-hidden="true" className="flex gap-1 text-sm">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={star <= value ? "text-primary" : "text-border"}
          />
        ))}
      </div>
    </div>
  );
}

function getMetrics(track) {
  const list = track.firstElementChild;
  const card = list?.querySelector("li");
  if (!list || !card) return null;
  const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
  return { gap, step: card.offsetWidth + gap };
}

const arrowClass =
  "grid size-10 place-items-center rounded-full border border-border bg-surface text-lg transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-40";

export default function Testimonials({ testimonials = TESTIMONIALS }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(1);
  const total = testimonials.length;

  const update = useCallback(() => {
    const track = trackRef.current;
    const metrics = track && getMetrics(track);
    if (!metrics) return;

    const visible = Math.max(
      1,
      Math.round((track.clientWidth + metrics.gap) / metrics.step),
    );
    const totalPages = Math.max(1, total - visible + 1);
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;

    setPages(totalPages);
    setActive(
      atEnd
        ? totalPages - 1
        : Math.min(Math.round(track.scrollLeft / metrics.step), totalPages - 1),
    );
  }, [total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  function goTo(index) {
    const track = trackRef.current;
    const metrics = track && getMetrics(track);
    if (!metrics) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollTo({
      left: index * metrics.step,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="section-spacing bg-background"
      >
        <div className="container-custom flex flex-col gap-12 lg:gap-16">
          {/* Intro */}
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <Reveal
              as="p"
              duration={0.55}
              className="text-sm font-medium uppercase tracking-wide text-primary"
            >
              What our customers say
            </Reveal>
            <Reveal
              as="h2"
              id="testimonials-heading"
              duration={0.55}
              delay={0.07}
              className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-tight"
            >
              Good Food, Happy People.
            </Reveal>
            <Reveal
              as="p"
              duration={0.55}
              delay={0.14}
              className="text-base leading-relaxed text-text-muted"
            >
              Discover what customers have shared about their YummyFood
              experience.
            </Reveal>
          </div>

          {total > 0 ? (
            <div className="flex flex-col gap-8">
              <Reveal duration={0.6} delay={0.1} className="min-w-0">
                <div
                  ref={trackRef}
                  role="region"
                  aria-label="Customer reviews"
                  tabIndex={0}
                  className="snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
                >
                  <ul className="flex gap-6">
                    {testimonials.map(
                      ({ id, name, image, date, title, review, rating }) => (
                        <li
                          key={id}
                          className="flex w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
                        >
                          <article className="flex w-full flex-col gap-4 rounded-card border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary">
                            <header className="flex items-start justify-between gap-4">
                              <div className="flex min-w-0 items-center gap-3">
                                <Image
                                  src={image}
                                  alt={name}
                                  width={56}
                                  height={56}
                                  className="size-14 shrink-0 rounded-full border-2 border-primary object-cover"
                                />
                                <div className="min-w-0">
                                  <p className="truncate font-heading text-lg leading-tight">
                                    {name}
                                  </p>
                                  <p className="text-xs italic text-text-muted">
                                    {date}
                                  </p>
                                </div>
                              </div>
                              <FaQuoteRight
                                aria-hidden="true"
                                className="shrink-0 text-4xl text-primary/25"
                              />
                            </header>

                            <h3 className="font-heading text-xl font-normal leading-snug">
                              {title}
                            </h3>

                            <blockquote className="text-sm leading-relaxed text-text-muted">
                              {review}
                            </blockquote>

                            <div className="mt-auto pt-2">
                              <Stars value={rating} />
                            </div>
                          </article>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </Reveal>

              {pages > 1 && (
                <Reveal
                  duration={0.5}
                  delay={0.2}
                  className="flex items-center justify-center gap-4"
                >
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.92 }}
                    aria-label="Previous review"
                    onClick={() => goTo(active - 1)}
                    disabled={active === 0}
                    className={arrowClass}
                  >
                    <FiChevronLeft aria-hidden="true" />
                  </motion.button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: pages }, (_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Go to review ${index + 1}`}
                        aria-current={index === active}
                        onClick={() => goTo(index)}
                        className={`h-2.5 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                          index === active
                            ? "w-6 bg-primary"
                            : "w-2.5 bg-border hover:bg-text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.92 }}
                    aria-label="Next review"
                    onClick={() => goTo(active + 1)}
                    disabled={active === pages - 1}
                    className={arrowClass}
                  >
                    <FiChevronRight aria-hidden="true" />
                  </motion.button>
                </Reveal>
              )}
            </div>
          ) : (
            <Reveal
              duration={0.55}
              className="mx-auto flex w-full max-w-2xl flex-col items-center gap-3 rounded-card border border-border bg-surface p-8 text-center"
            >
              <h3 className="font-heading text-2xl font-normal leading-tight">
                Your Experience Matters.
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-text-muted">
                Have you enjoyed YummyFood? Your feedback can help others
                discover their next favorite meal.
              </p>
            </Reveal>
          )}
        </div>
      </section>
    </MotionConfig>
  );
}
