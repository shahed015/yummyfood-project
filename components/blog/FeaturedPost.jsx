import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PostMeta from "./PostMeta";

export default function FeaturedPost({ post }) {
  const { slug, title, excerpt, category, image, date, readTime } = post;

  return (
    <section
      aria-label="Featured article"
      className="section-spacing bg-surface"
    >
      <div className="container-custom">
        <article className="group relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-4/3 overflow-hidden rounded-card">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Featured &middot; {category}
            </p>
            <h2 className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-tight">
              <Link
                href={`/blog/${slug}`}
                className="transition-colors duration-200 after:absolute after:inset-0 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {title}
              </Link>
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-text-muted">
              {excerpt}
            </p>
            <PostMeta date={date} readTime={readTime} />
            <span className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 group-hover:text-primary">
              Read article
              <FiArrowRight aria-hidden="true" />
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
