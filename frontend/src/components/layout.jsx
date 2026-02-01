import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ZOHO_FORM_URL } from "@/lib/constants";

export const Navigation = () => {
  return (
    <nav
      data-testid="navigation"
      className="fixed top-0 left-0 right-0 z-50 nav-glass border-b border-industrial-zinc"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-white text-lg tracking-wider hover:text-industrial-orange transition-colors">
            TNTX
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/about" className="font-body text-industrial-smoke hover:text-white text-sm hidden sm:block transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-body text-industrial-smoke hover:text-white text-sm hidden sm:block transition-colors">
              Contact
            </Link>
            <Link to="/apply">
              <Button
                data-testid="nav-apply-btn"
                size="sm"
                className="bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest text-xs px-4 rounded-none"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="py-12 bg-industrial-obsidian border-t border-industrial-zinc"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-white text-xl tracking-wider mb-2">
              TNTX
            </p>
            <p className="font-body text-industrial-smoke text-sm">
              Direct mill access. No middlemen.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="font-body text-industrial-smoke hover:text-white text-sm transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-body text-industrial-smoke hover:text-white text-sm transition-colors">
              Contact
            </Link>
            <Link to="/apply" className="font-body text-industrial-smoke hover:text-white text-sm transition-colors">
              Apply
            </Link>
          </div>
          <p className="font-body text-industrial-smoke text-sm">
            © {new Date().getFullYear()} TNTX
          </p>
        </div>
      </div>
    </footer>
  );
};
