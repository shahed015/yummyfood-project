import { PiForkKnife, PiShoppingBag, PiSmiley } from "react-icons/pi";
import Button from "@/components/ui/Button";
import SectionIntro from "@/components/ui/SectionIntro";

const STEPS = [
  {
    icon: PiForkKnife,
    title: "Choose Your Favorites",
    description:
      "Browse the menu and pick the dishes you feel like having today.",
  },
  {
    icon: PiShoppingBag,
    title: "Place Your Order",
    description:
      "Add items to your cart and check out through a simple, clear process.",
  },
  {
    icon: PiSmiley,
    title: "Sit Back And Enjoy",
    description:
      "Your meal is prepared with care and brought to you, ready to enjoy.",
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="section-spacing bg-background"
    >
      <div className="container-custom grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Sticky intro */}
        <div className="flex flex-col items-start gap-6 lg:sticky lg:top-28 lg:self-start">
          <SectionIntro
            eyebrow="How it works"
            title="From Craving To Table."
            titleId="how-it-works-heading"
            description="Ordering your next meal takes just three simple steps."
          />
          <Button href="/#menu" className="w-full sm:w-auto">
            Start Ordering
          </Button>
        </div>

        {/* Steps */}
        <ol className="flex flex-col">
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="group grid grid-cols-[4rem_1fr] gap-4 border-t border-border py-8 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[6rem_1fr] md:gap-6"
            >
              <span
                aria-hidden="true"
                className="font-heading text-6xl leading-none text-text-muted/30 transition-colors duration-200 group-hover:text-primary md:text-7xl"
              >
                {index + 1}
              </span>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-border bg-surface text-2xl transition-colors duration-200 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-2xl font-normal leading-tight">
                    {title}
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-text-muted md:text-base">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
