import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={cn("relative py-16 md:py-24 overflow-hidden", className)}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-feminine-primary to-feminine-primary-dark">
        {/* Feminine grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(155, 77, 202, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 105, 180, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-40 h-40 top-1/4 left-1/4 animate-float" style={{ animationDelay: '0s' }}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF69B4" />
                  <stop offset="1" stopColor="#9B4DCA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute w-64 h-64 top-2/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-5">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9B4DCA" />
                  <stop offset="1" stopColor="#FF69B4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-feminine-text-light font-montserrat">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-feminine-text-light/80">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
