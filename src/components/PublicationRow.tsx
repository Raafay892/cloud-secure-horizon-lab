import type { Publication } from "@/data/publications";
import { cn } from "@/lib/utils";

interface PublicationRowProps {
  pub: Publication;
  className?: string;
  children?: React.ReactNode;
}

/** Compact, citation-style listing used wherever publications are referenced. */
const PublicationRow: React.FC<PublicationRowProps> = ({ pub, className, children }) => (
  <article className={cn("group grid grid-cols-[3.5rem_1fr] gap-4 py-5 sm:grid-cols-[4.5rem_1fr] sm:gap-6", className)}>
    <div className="pt-0.5 font-mono text-sm text-brand-text-secondary">{pub.year}</div>
    <div className="min-w-0">
      <h3 className="font-display text-lg font-semibold leading-snug text-brand-text-primary">{pub.title}</h3>
      <p className="mt-1.5 text-sm text-brand-text-secondary">{pub.authors.join(", ")}</p>
      <p className="mt-1 text-sm italic text-brand-text-secondary">{pub.venue}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="tag capitalize">{pub.type}</span>
        {Boolean(pub.citations) && <span className="tag">{pub.citations} citations</span>}
        {children}
      </div>
    </div>
  </article>
);

export default PublicationRow;
