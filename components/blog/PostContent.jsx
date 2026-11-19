import { FiCheck } from "react-icons/fi";

function Block({ block, isLead }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-6 font-heading text-3xl font-normal leading-tight text-text">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="my-4 border-l-4 border-primary py-2 pl-6 font-heading text-2xl italic leading-snug text-text">
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-xs text-secondary">
                <FiCheck aria-hidden="true" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p className={isLead ? "text-xl leading-relaxed text-text" : undefined}>
          {block.text}
        </p>
      );
  }
}

export default function PostContent({ blocks }) {
  return (
    <section aria-label="Article" className="section-spacing bg-surface">
      <div className="container-custom">
        <div className="mx-auto flex max-w-2xl flex-col gap-6 text-base leading-loose text-text-muted">
          {blocks.map((block, index) => (
            <Block
              key={`${block.type}-${index}`}
              block={block}
              isLead={index === 0 && block.type === "paragraph"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
