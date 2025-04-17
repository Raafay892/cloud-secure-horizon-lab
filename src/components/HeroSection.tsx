
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    <section className="relative overflow-hidden">
      {/* Gradient Overlay and Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-csp-blue-dark/90 to-csp-blue-dark/70 z-10"></div>
        <img
          src={imageSrc}
          alt="Cloud Security"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="max-w-3xl text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {primaryButtonText && primaryButtonLink && (
              <Button asChild size="lg" className="bg-csp-teal hover:bg-csp-teal/90">
                <Link to={primaryButtonLink}>{primaryButtonText}</Link>
              </Button>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
