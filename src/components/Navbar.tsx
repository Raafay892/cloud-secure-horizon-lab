
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
    <header className="sticky top-0 z-50 w-full bg-csp-primary border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="flex items-center text-white">
                <Shield className="h-6 w-6 text-csp-accent mr-2" />
                <Lock className="h-5 w-5 text-white mr-2" />
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
                      ? "text-csp-accent border-b-2 border-csp-accent pb-1"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-csp-secondary" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4 animate-fade-in bg-csp-primary">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium px-3 py-2 rounded-md font-montserrat uppercase tracking-wide text-sm ${
                      isActive
                        ? "bg-csp-secondary text-csp-accent"
                        : "text-gray-300 hover:bg-csp-secondary/70 hover:text-white"
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
