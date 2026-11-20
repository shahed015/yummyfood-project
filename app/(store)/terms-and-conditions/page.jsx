import PageHero from "@/components/ui/PageHero.jsx";
import PostContent from "@/components/blog/PostContent";
import Newsletter from "@/components/home/Newsletter";
import { LEGAL_PAGES } from "@/data/legal";

const page = LEGAL_PAGES.terms;

export const metadata = {
  title: "Terms & Conditions | YummyFood",
  description: "The terms for using YummyFood and placing orders.",
};

export default function TermsPage() {
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
