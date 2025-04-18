
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
    <section className="relative overflow-hidden bg-csp-primary text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-csp-primary z-0">
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-csp-primary via-csp-primary/90 to-csp-secondary/80"></div>
        {/* Grid pattern overlay similar to CityDefend */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-csp-accent/50 bg-csp-accent/10 rounded text-csp-accent text-sm font-medium tracking-wide">
            CLOUD SECURITY & PRIVACY RESEARCH
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-montserrat tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {primaryButtonText && primaryButtonLink && (
              <Button 
                asChild 
                size="lg" 
                className="bg-csp-accent hover:bg-csp-accent-subtle text-white font-medium rounded-md px-6 py-3 flex items-center"
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
                className="text-white border-white/30 hover:bg-white/10 rounded-md px-6 py-3"
              >
                <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom curve effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto fill-background">
          <path d="M0,0V60H1440V0C1082.31,40 360,40 0,0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
