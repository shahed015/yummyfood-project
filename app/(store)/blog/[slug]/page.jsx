import { notFound } from "next/navigation";
import PostHeader from "@/components/blog/PostHeader";
import PostContent from "@/components/blog/PostContent";
import PostGrid from "@/components/blog/PostGrid";
import Newsletter from "@/components/home/Newsletter";
import { POSTS, getPostBySlug, getRelatedPosts } from "@/data/posts";

export function generateStaticParams() {
  return POSTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Article not found | YummyFood" };

  return {
    title: `${post.title} | YummyFood`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <main>
        <PostHeader post={post} />
        <PostContent blocks={post.content} />
        <PostGrid
          posts={getRelatedPosts(slug)}
          eyebrow="Keep reading"
          title="Related Articles."
          titleId="related-heading"
        />
        <Newsletter />
      </main>
    </>
  );
}
