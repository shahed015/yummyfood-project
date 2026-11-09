import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Button from "@/components/ui/Button";
import SectionIntro from "@/components/ui/SectionIntro";

const MAIN_IMAGE = "/img/pizza-slice.jpg";
const ACCENT_IMAGE = "/img/dessert-2.jpg";

const PARAGRAPHS = [
  "YummyFood was created around a simple idea: great food should be easy to enjoy. We bring together carefully selected ingredients, thoughtful preparation, and a smooth ordering experience so every meal feels special.",
  "Whether you are ordering for yourself, your family, or a gathering, we focus on consistency, care, and flavor in every dish.",
];

const HIGHLIGHTS = [
  "Carefully selected ingredients",
  "Thoughtful, consistent preparation",
  "A simple, user-friendly ordering experience",
];

export default function OurStory() {
  return (
    <section
      aria-labelledby="story-heading"
      className="section-spacing bg-surface"
    >
      <div className="container-custom grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Main image with overlapping accent */}
        <div className="relative mb-10 lg:mb-0">
          <div className="relative aspect-4/5 overflow-hidden rounded-card">
            <Image
              src={MAIN_IMAGE}
              alt="A freshly prepared YummyFood dish"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-10 right-4 aspect-square w-[45%] overflow-hidden rounded-card border-[6px] border-surface lg:-right-12">
            <Image
              src={ACCENT_IMAGE}
              alt=""
              fill
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-6">
          <SectionIntro
            eyebrow="Our story"
            title="Good Food, Made Simple."
            titleId="story-heading"
          />

          <div className="flex flex-col gap-4">
            {PARAGRAPHS.map((text) => (
              <p
                key={text}
                className="max-w-lg text-base leading-loose text-text-muted"
              >
                {text}
              </p>
            ))}
          </div>

          <ul className="flex flex-col gap-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-secondary">
                  <FiCheck aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Button href="/#menu" className="mt-2 w-full sm:w-auto">
            Explore Our Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
