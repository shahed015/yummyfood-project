export default function LineEyebrow({ children, centered = false }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
      <span aria-hidden="true" className="h-px w-8 bg-primary" />
      {children}
      {centered && <span aria-hidden="true" className="h-px w-8 bg-primary" />}
    </p>
  );
}
