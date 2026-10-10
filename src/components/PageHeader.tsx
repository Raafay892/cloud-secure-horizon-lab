import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, subtitle, className, children }) => {
  return (
    <section className={cn("relative overflow-hidden bg-brand-background-dark text-white", className)}>
      <div className="absolute inset-0 grid-backdrop" aria-hidden />
      <div
        className="absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-brand-primary/40 blur-[120px]"
        aria-hidden
      />
      <div className="container relative mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow !text-brand-primary-light">{eyebrow}</p>}
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-white md:text-5xl">{title}</h1>
          {subtitle && <p className="mt-5 text-lg leading-relaxed text-white/70">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
