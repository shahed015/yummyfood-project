import PageHero from "@/components/ui/PageHero.jsx";
import PostContent from "@/components/blog/PostContent";
import Newsletter from "@/components/home/Newsletter";
import { LEGAL_PAGES } from "@/data/legal";

const page = LEGAL_PAGES.privacy;

export const metadata = {
  title: "Privacy Policy | YummyFood",
  description: "How YummyFood collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main>
        <PageHero title={page.title} description={page.description} />
        <PostContent blocks={page.content} />
        <Newsletter />
      </main>
    </>
  );
}
