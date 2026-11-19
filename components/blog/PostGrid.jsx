import SectionIntro from "@/components/ui/SectionIntro";
import PostCard from "./PostCard";

export default function PostGrid({
  posts,
  eyebrow = "Latest articles",
  title = "More To Read.",
  titleId = "posts-heading",
  className = "bg-background",
  children,
}) {
  return (
    <section
      aria-labelledby={titleId}
      className={`section-spacing ${className}`}
    >
      <div className="container-custom flex flex-col gap-12">
        <SectionIntro eyebrow={eyebrow} title={title} titleId={titleId} />

        {posts.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-base text-text-muted">
            No articles yet. Please check back soon.
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
