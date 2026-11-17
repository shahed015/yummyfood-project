import Button from "@/components/ui/Button";

const fieldClass =
  "w-full rounded-input border border-background/15 bg-background/5 px-4 py-3 text-sm text-background placeholder:text-background/40 transition-colors duration-200 focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

function Field({ id, label, className = "", multiline = false, ...props }) {
  const Control = multiline ? "textarea" : "input";

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-[0.2em] text-background/70"
      >
        {label}
        <span aria-hidden="true" className="text-primary">
          {" "}
          *
        </span>
      </label>
      <Control
        id={id}
        name={id}
        required
        className={`${fieldClass} ${multiline ? "min-h-32 resize-y" : ""}`}
        {...props}
      />
    </div>
  );
}

/*
 * UI only. To make it functional later: make the button type="submit"
 * and add an onSubmit handler or a server action.
 */
export default function ContactForm() {
  return (
    <form
      className="flex flex-col gap-6"
      aria-labelledby="contact-form-heading"
    >
      <div className="flex flex-col gap-2">
        <h3
          id="contact-form-heading"
          className="font-heading text-3xl font-normal leading-tight"
        >
          Your Details
        </h3>
        <p className="text-sm text-background/70">
          Let us know how to get back to you.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          type="text"
          placeholder="John"
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email address"
          type="email"
          placeholder="email@gmail.com"
          autoComplete="email"
        />
      </div>

      <Field id="subject" label="Subject" type="text" placeholder="Subject" />
      <Field
        id="message"
        label="Comments / Questions"
        multiline
        rows={5}
        placeholder="Question"
      />

      <Button type="button" variant="onDark" className="w-full sm:w-fit">
        Send Message
      </Button>
    </form>
  );
}
