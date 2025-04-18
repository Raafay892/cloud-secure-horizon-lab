
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Lock } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Research", path: "/research" },
  { name: "Publications", path: "/publications" },
  { name: "Events & News", path: "/events" },
  { name: "Collaborations", path: "/collaborations" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="flex items-center text-white">
                <Shield className="h-6 w-6 text-csp-accent animate-glow mr-2" />
                <Lock className="h-5 w-5 text-csp-cyan mr-2" />
                <span className="text-xl font-bold font-montserrat tracking-tight">CSP Lab</span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors text-sm font-montserrat uppercase tracking-wide ${
                    isActive
                      ? "text-csp-accent border-b border-csp-accent"
                      : "text-csp-gray-light hover:text-csp-accent"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4 animate-fade-in bg-black/40 backdrop-blur-md rounded-b-md">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium px-3 py-2 rounded-md font-montserrat uppercase tracking-wide text-sm ${
                      isActive
                        ? "bg-csp-primary/50 text-csp-accent border-l-2 border-csp-accent"
                        : "text-csp-gray-light hover:bg-black/20 hover:text-csp-accent"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
