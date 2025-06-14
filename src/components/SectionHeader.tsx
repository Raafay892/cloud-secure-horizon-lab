import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-3 relative inline-block font-montserrat text-feminine-text-primary">
        {title}
        <span className="absolute -bottom-1 left-0 w-14 h-1 bg-gradient-to-r from-feminine-primary to-feminine-secondary shadow-[0_0_10px_rgba(155,77,202,0.4)]"></span>
      </h2>
      {subtitle && (
        <p className="text-feminine-text-secondary mt-4 max-w-3xl text-lg"
           style={{ marginLeft: align === "center" ? "auto" : "", marginRight: align === "center" ? "auto" : "" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
