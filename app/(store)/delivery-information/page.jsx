import PageHero from "@/components/ui/PageHero.jsx";
import PostContent from "@/components/blog/PostContent";
import Newsletter from "@/components/home/Newsletter";
import { LEGAL_PAGES } from "@/data/legal";

const page = LEGAL_PAGES.delivery;

export const metadata = {
  title: "Delivery Information | YummyFood",
  description: "Delivery areas, hours, and timing for YummyFood orders.",
};

export default function DeliveryInformationPage() {
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
