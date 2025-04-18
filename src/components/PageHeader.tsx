
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
    <div className={`relative py-16 md:py-24 ${className}`}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-csp-primary to-csp-secondary">
        {/* Cyber grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 127, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        {/* Hexagon shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10 animate-float" style={{ animationDelay: '0s' }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="rgba(255,0,127,0.1)" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 opacity-5 animate-float" style={{ animationDelay: '1.5s' }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="rgba(0,255,255,0.1)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-montserrat tracking-tight text-white">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Bottom curve effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto">
          <path d="M0,0V60H1440V0C1082.31,40 360,40 0,0Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e005a" />
              <stop offset="1" stopColor="#3d006f" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default PageHeader;
