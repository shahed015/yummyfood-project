import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import PostMeta from "./PostMeta";

export default function PostHeader({ post }) {
  const { title, excerpt, category, image, date, readTime } = post;

  return (
    <header className="bg-background pb-10 pt-8 md:pt-12 lg:pb-14">
      <div className="container-custom flex flex-col gap-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <FiArrowLeft aria-hidden="true" />
            Back to blog
          </Link>

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {category}
          </p>

          <h1 className="font-heading text-[clamp(2.25rem,6vw,4.5rem)] font-normal leading-[1.1] tracking-tight">
            {title}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            {excerpt}
          </p>

          <PostMeta date={date} readTime={readTime} />
        </div>

        <div className="relative aspect-16/10 overflow-hidden rounded-card md:aspect-21/9">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
