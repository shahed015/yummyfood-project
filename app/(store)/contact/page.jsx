import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact Us | YummyFood",
  description:
    "Get in touch with YummyFood for questions, feedback, or help with your order.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactHero />
        <ContactSection />
      </main>
    </>
  );
}
