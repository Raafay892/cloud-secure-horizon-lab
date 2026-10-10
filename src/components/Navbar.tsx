import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Research", path: "/research" },
  { name: "Publications", path: "/publications" },
  { name: "Collaborations", path: "/collaborations" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/85 backdrop-blur-lg transition-colors",
        scrolled ? "border-brand-line" : "border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3" aria-label={`${site.shortName} home`}>
            {/* The logo file has wide transparent padding; crop to the artwork */}
            <span className="block h-[60px] w-[152px] shrink-0 overflow-hidden">
              <img
                src="/lovable-uploads/b763174b-1460-4f31-b17c-8377e00e453f.png"
                alt="CSP Lab Logo"
                className="block h-auto w-[180px] max-w-none -ml-[11px] -mt-[48px]"
              />
            </span>
            <span className="hidden sm:flex flex-col leading-tight border-l border-brand-line pl-3">
              <span className="font-serif text-[17px] font-semibold text-brand-text-primary">{site.name}</span>
              <span className="text-xs text-brand-text-secondary">{site.institution}</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand-primary bg-brand-primary-soft"
                      : "text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-background-alt"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button asChild size="sm" className="ml-3">
              <Link to="/contact">Contact</Link>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="!h-6 !w-6" /> : <Menu className="!h-6 !w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-1 pb-4 animate-fade-in">
            {[...navItems, { name: "Contact", path: "/contact" }].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2.5 text-[15px] font-medium",
                    isActive
                      ? "bg-brand-primary-soft text-brand-primary"
                      : "text-brand-text-secondary hover:bg-brand-background-alt"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
