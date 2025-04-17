
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-csp-blue-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">CSP Lab</h2>
            <p className="text-sm mb-4">
              Innovating the Future of Cloud Security and Privacy
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-csp-teal transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-csp-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-csp-teal transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-300 hover:text-csp-teal transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="text-sm text-gray-300 hover:text-csp-teal transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="text-sm text-gray-300 hover:text-csp-teal transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-sm text-gray-300 hover:text-csp-teal transition-colors"
                >
                  Events & News
                </Link>
              </li>
              <li>
                <Link
                  to="/collaborations"
                  className="text-sm text-gray-300 hover:text-csp-teal transition-colors"
                >
                  Collaborations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-300 hover:text-csp-teal transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-gray-300">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 University Avenue, Research Building, Room 456</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a
                  href="mailto:contact@csplab.org"
                  className="hover:text-csp-teal transition-colors"
                >
                  contact@csplab.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Cloud Security and Privacy Lab. All rights
            reserved.
          </p>
          <div className="mt-2">
            <a href="#" className="hover:text-csp-teal transition-colors mr-4">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-csp-teal transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
