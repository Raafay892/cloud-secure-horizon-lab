import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  action,
}) => {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center" && "mx-auto max-w-2xl text-center",
        action && "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div className={cn(align === "left" && "max-w-2xl")}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-4 text-lg leading-relaxed text-brand-text-secondary">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
};

export default SectionHeader;
