
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
    <div className={`relative bg-csp-primary text-white py-16 md:py-20 ${className}`}>
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Bottom curve effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto fill-background">
          <path d="M0,0V60H1440V0C1082.31,40 360,40 0,0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default PageHeader;
