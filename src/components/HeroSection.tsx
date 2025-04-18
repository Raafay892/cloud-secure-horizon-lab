
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-csp-primary/90 to-csp-secondary/80"></div>
        
        {/* Cyber grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 127, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        {/* Animated hexagons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-40 h-40 top-1/4 left-1/4 animate-float" style={{ animationDelay: '0s' }}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF007F" />
                  <stop offset="1" stopColor="#00FFFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute w-64 h-64 top-2/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-5">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00FFFF" />
                  <stop offset="1" stopColor="#FF007F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-csp-cyan/30 bg-csp-cyan/5 rounded-pill text-csp-cyan text-sm font-medium tracking-wide backdrop-blur-sm">
            CLOUD SECURITY & PRIVACY RESEARCH
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-montserrat tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-csp-gray-light leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {primaryButtonText && primaryButtonLink && (
              <Button 
                asChild 
                size="lg" 
                className="bg-csp-accent hover:bg-csp-accent-subtle text-white font-medium rounded-pill px-6 py-3 flex items-center shadow-[0_0_15px_rgba(255,0,127,0.4)] hover:shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-all duration-300"
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
                className="text-csp-cyan border-csp-cyan/50 hover:bg-csp-cyan/10 rounded-pill px-6 py-3 shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all duration-300"
              >
                <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
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
              <stop stopColor="#1e005a" />
              <stop offset="1" stopColor="#3d006f" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
