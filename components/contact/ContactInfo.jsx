import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import LineEyebrow from "@/components/ui/LineEyebrow";
import { CONTACT, OPENING_HOURS, SOCIAL_LINKS } from "@/utils/Siteconfig.js";

const INFO_ITEMS = [
  {
    icon: FiMapPin,
    label: "Address",
    lines: [CONTACT.address].filter(Boolean),
  },
  {
    icon: FiPhone,
    label: "Phone",
    lines: [CONTACT.phone].filter(Boolean),
    href: CONTACT.phone && `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FiMail,
    label: "Email",
    lines: [CONTACT.email].filter(Boolean),
    href: CONTACT.email && `mailto:${CONTACT.email}`,
  },
  {
    icon: FiClock,
    label: "Opening Hours",
    lines: OPENING_HOURS.map(({ days, time }) => `${days}: ${time}`),
  },
];

export default function ContactInfo() {
  const socials = SOCIAL_LINKS.filter(({ href }) => href);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <LineEyebrow>Keep close</LineEyebrow>
        <h2
          id="contact-heading"
          className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-tight"
        >
          Get In Touch
        </h2>
        <p className="max-w-md text-base leading-relaxed text-background/70">
          Have a question, feedback, or need help with an order? Send us a
          message and we will get back to you.
        </p>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2">
        {INFO_ITEMS.map(({ icon: Icon, label, lines, href }) => (
          <li key={label} className="flex items-start gap-4">
            <Icon
              aria-hidden="true"
              className="mt-1 shrink-0 text-2xl text-primary"
            />
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-background/50">
                {label}
              </p>
              {lines.length > 0 ? (
                lines.map((line) =>
                  href ? (
                    <a
                      key={line}
                      href={href}
                      className="block wrap-break-word text-sm leading-relaxed transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {line}
                    </a>
                  ) : (
                    <p
                      key={line}
                      className="wrap-break-word text-sm leading-relaxed"
                    >
                      {line}
                    </p>
                  ),
                )
              ) : (
                <p className="text-sm text-background/50">Coming soon</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {socials.length > 0 && (
        <div className="flex flex-col gap-4 border-t border-background/15 pt-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-background/50">
            Follow us
          </p>
          <ul className="flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-background/15 transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
