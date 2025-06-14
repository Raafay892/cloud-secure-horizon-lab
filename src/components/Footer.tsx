import { Link } from "react-router-dom";
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Shield, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-feminine-primary text-feminine-text-light pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-feminine-secondary mr-2" />
              <h2 className="text-xl font-bold">CSP Lab</h2>
            </div>
            <p className="text-feminine-text-light/80 mb-6 text-sm leading-relaxed">
              The Cloud Security and Privacy Lab is dedicated to advancing the state of the art through innovative research and practical solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-feminine-text-light/80 hover:text-feminine-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-feminine-text-light/80 hover:text-feminine-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-feminine-text-light/80 hover:text-feminine-secondary transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-feminine-text-light/80 hover:text-feminine-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm uppercase tracking-wider font-bold mb-4 text-feminine-text-light">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-feminine-text-light/80 hover:text-feminine-secondary transition-colors link-underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="text-sm text-feminine-text-light/80 hover:text-feminine-secondary transition-colors link-underline"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="text-sm text-feminine-text-light/80 hover:text-feminine-secondary transition-colors link-underline"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-sm text-feminine-text-light/80 hover:text-feminine-secondary transition-colors link-underline"
                >
                  Events & News
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm uppercase tracking-wider font-bold mb-4 text-feminine-text-light">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/collaborations"
                  className="text-sm text-feminine-text-light/80 hover:text-feminine-secondary transition-colors link-underline"
                >
                  Collaborations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-feminine-text-light/80 hover:text-feminine-secondary transition-colors link-underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-feminine-text-light/80 hover:text-feminine-secondary transition-colors link-underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-feminine-text-light/80 hover:text-feminine-secondary transition-colors link-underline"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm uppercase tracking-wider font-bold mb-4 text-feminine-text-light">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-feminine-text-light/80">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-feminine-secondary" />
                <span>123 University Avenue, Research Building, Room 456</span>
              </li>
              <li className="flex items-center text-sm text-feminine-text-light/80">
                <Phone size={16} className="mr-2 flex-shrink-0 text-feminine-secondary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-sm text-feminine-text-light/80">
                <Mail size={16} className="mr-2 flex-shrink-0 text-feminine-secondary" />
                <a
                  href="mailto:contact@csplab.org"
                  className="hover:text-feminine-secondary transition-colors"
                >
                  contact@csplab.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-feminine-primary/30 text-center text-sm text-feminine-text-light/60">
          <p>
            &copy; {currentYear} Cloud Security and Privacy Lab. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
