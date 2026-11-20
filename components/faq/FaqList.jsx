import { FiPlus } from "react-icons/fi";
import SectionIntro from "@/components/ui/SectionIntro";

export default function FaqList({ faqs }) {
  return (
    <section
      aria-labelledby="faq-heading"
      className="section-spacing bg-surface"
    >
      <div className="container-custom grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <SectionIntro
          eyebrow="FAQ"
          title="Answers To Common Questions."
          titleId="faq-heading"
          description="Can't find what you need? Contact us and we will help."
        />

        <div className="flex flex-col border-b border-border">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group border-t border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-heading text-xl leading-snug transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                {question}
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-lg transition-transform duration-200 group-open:rotate-45">
                  <FiPlus aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-xl pb-6 text-base leading-relaxed text-text-muted">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
