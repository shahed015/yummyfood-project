import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="section-spacing bg-secondary text-background"
    >
      <div className="container-custom grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
