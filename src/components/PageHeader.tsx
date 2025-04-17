
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`py-12 md:py-16 text-center ${className}`}>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
