import {
  PiPlant,
  PiMotorcycle,
  PiChefHat,
  PiShoppingBag,
} from "react-icons/pi";
import Reveal from "@/components/motion/Reveal";

const FEATURES = [
  {
    icon: PiPlant,
    title: "Fresh Ingredients",
    description:
      "We carefully select fresh ingredients to bring natural flavor and quality to every meal.",
  },
  {
    icon: PiMotorcycle,
    title: "Fast & Reliable Delivery",
    description:
      "Enjoy your favorite meals delivered efficiently, with convenience from checkout to doorstep.",
  },
  {
    icon: PiChefHat,
    title: "Quality You Can Taste",
    description:
      "Every dish is prepared with attention to flavor, consistency, and a satisfying dining experience.",
  },
  {
    icon: PiShoppingBag,
    title: "Effortless Ordering",
    description:
      "Discover your favorite dishes and place your order through a simple, user-friendly experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="section-spacing bg-surface"
    >
      <div className="container-custom flex flex-col gap-12 lg:gap-16">
        {/* Intro */}

        <Reveal delay={0.07} duration={0.5} className="min-w-0">
          <div className="grid items-end gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Why choose YummyFood
              </p>
              <h2
                id="why-choose-us-heading"
                className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-tight"
              >
                Good Food. Great Experience.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-text-muted lg:ml-auto">
              From carefully selected ingredients to reliable delivery, we make
              every meal feel special.
            </p>
          </div>
        </Reveal>

        {/* Features */}
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }, index) => (
            <Reveal
              key={title}
              delay={index * 0.07}
              duration={0.5}
              className="min-w-0"
            >
              <li
                key={title}
                className="group flex flex-col gap-4 border-t border-border pt-6 transition-colors duration-200 hover:border-primary"
              >
                <Icon aria-hidden="true" className="text-4xl text-primary" />
                <h3 className="font-heading text-2xl font-normal leading-tight">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
