import PageHero from "@/components/ui/PageHero.jsx";
import FaqList from "@/components/faq/FaqList";
import Newsletter from "@/components/home/Newsletter";
import { FAQS } from "@/data/legal";

export const metadata = {
  title: "Frequently Asked Questions | YummyFood",
  description:
    "Answers to common questions about ordering, delivery, and payments at YummyFood.",
};

export default function FaqPage() {
  return (
    <>
      <main>
        <PageHero
          title="Frequently Asked Questions"
          description="Quick answers about ordering, delivery, and payments."
        />
        <FaqList faqs={FAQS} />
        <Newsletter />
      </main>
    </>
  );
}
