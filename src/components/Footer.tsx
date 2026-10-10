import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

const columns = [
  {
    title: "Lab",
    links: [
      { label: "About", to: "/about" },
      { label: "Research", to: "/research" },
      { label: "Publications", to: "/publications" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { label: "Collaborations", to: "/collaborations" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-background-dark text-white/70">
      <div className="container mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl font-semibold text-white">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              Applied cryptography research for the cloud: searchable and homomorphic encryption,
              privacy-preserving AI, and trustworthy decentralised systems.
            </p>
            <p className="mt-6 text-xs text-white/50">
              Funded by the {site.funder}.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-white/50">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-white/50">Visit</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary-light" />
                <span>{site.address.join(", ")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-primary-light" />
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-primary-light" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>&copy; {currentYear} {site.name}, {site.institution}.</p>
          <p>Est. {site.founded}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
