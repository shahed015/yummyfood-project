import { formatDate } from "@/lib/formatDate";

export default function PostMeta({ date, readTime }) {
  return (
    <p className="flex items-center gap-2 text-xs text-text-muted">
      <time dateTime={date}>{formatDate(date)}</time>
      <span aria-hidden="true">&middot;</span>
      <span>{readTime} min read</span>
    </p>
  );
}
