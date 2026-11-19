import Image from "next/image";
import Link from "next/link";
import PostMeta from "./PostMeta";

export default function PostCard({ post }) {
  const { slug, title, excerpt, category, image, date, readTime } = post;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface transition-colors duration-200 hover:border-primary">
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {category}
        </p>
        <h3 className="font-heading text-xl font-normal leading-snug">
          <Link
            href={`/blog/${slug}`}
            className="transition-colors duration-200 after:absolute after:inset-0 group-hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            {title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-text-muted">
          {excerpt}
        </p>
        <div className="mt-auto pt-2">
          <PostMeta date={date} readTime={readTime} />
        </div>
      </div>
    </article>
  );
}
