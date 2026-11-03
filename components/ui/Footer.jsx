import Link from "next/link";
import Image from "next/image";
import { FiClock, FiMail, FiMapPin, FiPhone, FiTruck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  CONTACT,
  COPYRIGHT_YEAR,
  OPENING_HOURS,
  SOCIAL_LINKS,
} from "@/utils/Siteconfig";
import Reveal from "@/components/motion/Reveal";

const BRAND_DESCRIPTION =
  "Good food, thoughtfully prepared and delivered with care. Discover your favorites and make every meal special with YummyFood.";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Newsletter", href: "/#newsletter" },
];

const SUPPORT_LINKS = [
  { label: "Contact Us", href: "/contact" },
  { label: "Frequently Asked Questions" },
  { label: "Delivery Information" },
  { label: "Privacy Policy" },
  { label: "Terms & Conditions" },
];

// Only items with a value are rendered.
const CONTACT_ITEMS = [
  {
    icon: FiPhone,
    text: CONTACT.phone,
    href: CONTACT.phone && `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FaWhatsapp,
    text: CONTACT.whatsapp && "Chat on WhatsApp",
    href: CONTACT.whatsapp && `https://wa.me/${CONTACT.whatsapp}`,
    external: true,
  },
  {
    icon: FiMail,
    text: CONTACT.email,
    href: CONTACT.email && `mailto:${CONTACT.email}`,
  },
  { icon: FiMapPin, text: CONTACT.address },
  {
    icon: FiTruck,
    text: CONTACT.deliveryArea && `Delivery: ${CONTACT.deliveryArea}`,
  },
].filter((item) => item.text);

const HOURS_ITEMS = OPENING_HOURS.map(({ days, time }) => ({
  icon: FiClock,
  text: `${days}: ${time}`,
}));

const STAGGER = 0.07;

/* Heading + content. `nav` hole heading diye label hoy. */
function FooterColumn({ title, as: Tag = "div", children }) {
  const id = `footer-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Tag
      aria-labelledby={Tag === "nav" ? id : undefined}
      className="flex flex-col gap-5"
    >
      <h2 id={id} className="footer-heading">
        {title}
      </h2>
      {children}
    </Tag>
  );
}

/* Text-only link list; href na thakle muted text. */
function LinkList({ items }) {
  return (
    <ul className="flex flex-col gap-3 text-sm">
      {items.map(({ label, href }) => (
        <li key={label}>
          {href ? (
            <Link href={href} className="link-hover focus-ring">
              {label}
            </Link>
          ) : (
            <span className="text-white/50">{label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

/* Icon + text rows (contact, opening hours). */
function IconList({ items, emptyText }) {
  if (items.length === 0) {
    return <p className="text-sm text-white/50">{emptyText}</p>;
  }

  return (
    <ul className="flex flex-col gap-3 text-sm">
      {items.map(({ icon: Icon, text, href, external }) => (
        <li key={href ?? text} className="flex items-start gap-3">
          <Icon aria-hidden="true" className="footer-icon" />
          {href ? (
            <a
              href={href}
              className="link-hover focus-ring wrap-break-word"
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {text}
            </a>
          ) : (
            <span className="wrap-break-word">{text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const socials = SOCIAL_LINKS.filter(({ href }) => href);

  return (
    <footer className="bg-secondary text-white/70">
      <div className="container-custom">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:py-20">
          {/* Brand */}
          <Reveal
            duration={0.55}
            className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1"
          >
            <Link
              href="/"
              aria-label="YummyFood home"
              className="w-fit focus-ring"
            >
              <Image
                src="/logo.png"
                alt="YummyFood"
                width={180}
                height={48}
                className="h-10 w-auto"
              />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed">
              {BRAND_DESCRIPTION}
            </p>

            {socials.length > 0 && (
              <ul className="flex gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="social-btn focus-ring"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          {/* Quick links */}
          <Reveal duration={0.55} delay={STAGGER}>
            <FooterColumn title="Quick Links" as="nav">
              <LinkList items={QUICK_LINKS} />
            </FooterColumn>
          </Reveal>

          {/* Support */}
          <Reveal duration={0.55} delay={STAGGER * 2}>
            <FooterColumn title="Customer Support" as="nav">
              <LinkList items={SUPPORT_LINKS} />
            </FooterColumn>
          </Reveal>

          {/* Contact + hours */}
          <Reveal
            duration={0.55}
            delay={STAGGER * 3}
            className="flex flex-col gap-8 sm:col-span-2 lg:col-span-1"
          >
            <FooterColumn title="Get in Touch">
              <IconList
                items={CONTACT_ITEMS}
                emptyText="Contact details coming soon."
              />
            </FooterColumn>

            <FooterColumn title="Opening Hours">
              <IconList
                items={HOURS_ITEMS}
                emptyText="Opening hours coming soon."
              />
            </FooterColumn>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal
          duration={0.5}
          direction="none"
          className="flex flex-col gap-2 border-t border-white/15 py-6 text-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <p>&copy; {COPYRIGHT_YEAR} YummyFood. All rights reserved.</p>
        </Reveal>
      </div>
    </footer>
  );
}
