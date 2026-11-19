import PageHero from "@/components/ui/PageHero.jsx";
import FeaturedPost from "@/components/blog/FeaturedPost";
import PostGrid from "@/components/blog/PostGrid";
import Newsletter from "@/components/home/Newsletter";
import { POSTS } from "@/data/posts";

export const metadata = {
  title: "Blog | YummyFood",
  description: "Food tips, recipes, and ordering guides from YummyFood.",
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <main>
        <PageHero
          title="Our Blog"
          description="Tips, ideas, and stories about good food."
        />
        {featured && <FeaturedPost post={featured} />}
        <PostGrid posts={rest} />
        <Newsletter />
      </main>
    </>
  );
}
