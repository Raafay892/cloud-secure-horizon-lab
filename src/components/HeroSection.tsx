import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageSrc = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80",
  primaryButtonText = "Learn More",
  primaryButtonLink = "/about",
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
}) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-feminine-primary/80 via-feminine-primary/90 to-feminine-secondary/80"></div>
        
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
          <div className="inline-block px-3 py-1 mb-6 border-2 border-feminine-primary bg-white/90 text-feminine-primary rounded-pill text-sm font-medium tracking-wide backdrop-blur-sm shadow-sm">
            CLOUD SECURITY & PRIVACY RESEARCH
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-montserrat tracking-tight text-feminine-text-light">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-feminine-text-light/80 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {primaryButtonText && primaryButtonLink && (
              <Button 
                asChild 
                size="lg" 
                className="bg-feminine-primary hover:bg-feminine-primary-dark text-feminine-text-light"
              >
                <Link to={primaryButtonLink}>
                  {primaryButtonText}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="group border-2 border-feminine-primary bg-white text-feminine-primary font-bold shadow-none hover:bg-white hover:text-feminine-primary hover:border-feminine-primary focus:outline-none focus:ring-2 focus:ring-feminine-primary focus:ring-offset-2 pointer-events-auto opacity-100"
                tabIndex={0}
                type="button"
              >
                <Link to={secondaryButtonLink} className="!text-feminine-primary !opacity-100 group-hover:!text-feminine-primary pointer-events-auto">{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom curve effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto" style={{ filter: 'drop-shadow(0 -5px 10px rgba(0,0,0,0.2))' }}>
          <path d="M0,0V60H1440V0C1082.31,40 360,40 0,0Z" fill="url(#paint1_linear)" />
          <defs>
            <linearGradient id="paint1_linear" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9B4DCA" />
              <stop offset="1" stopColor="#7B2CBF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
