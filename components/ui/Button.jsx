import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const VARIANTS = {
  default: "btn-default",
  onPrimary: "btn-on-primary",
  onDark: "btn-on-dark",
};

export default function Button({
  href,
  type = "button",
  variant = "default",
  children,
  className = "",
  ...props
}) {
  const classes = `btn ${VARIANTS[variant]} ${className}`;

  const content = (
    <>
      {children}
      <FiArrowRight aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
