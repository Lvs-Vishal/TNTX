import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, User, MessageSquare, FileText, Send, Menu } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Contact', url: '/contact', icon: MessageSquare },
    { name: 'Brochure', url: '/TNTX_BROUCHURE.pdf', icon: FileText, external: true, download: true }
  ];

  const APPLY_URL = "https://forms.zohopublic.in/infotn1/form/TNTXImmersionApplication/formperma/zded7NgrSJ-7r1zRh1ZUYUSVhksII_Rb5Ienz6J8E7Y";

  return (
    <>
      <div ref={sentinelRef} style={{ position: 'absolute', top: 0, height: 1, width: '100%', pointerEvents: 'none' }} />

      <nav
        data-testid="navigation"
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="font-heading text-white text-lg tracking-wider hover:text-industrial-orange transition-colors flex items-center h-full leading-none"
            >
              TNTX
            </Link>

            {/* Tubelight Navbar pill */}
            <NavBar items={navItems} />

            {/* Apply Now Button - Always visible, visually distinct */}
            <div className="flex items-center gap-4">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-industrial-orange hover:bg-industrial-orange/90 text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs px-3 sm:px-6 py-2 rounded-full transition-all duration-300 shadow-lg"
                >
                  Apply Now
                </Button>
              </a>

              {/* Mobile menu logic kept for any extra things, but NavBar handles core nav */}
              <div className="sm:hidden flex items-center">
                <div className="hidden">
                  <Sheet>
                    {/* ... */}
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
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
            <a href="https://forms.zohopublic.in/infotn1/form/TNTXImmersionApplication/formperma/zded7NgrSJ-7r1zRh1ZUYUSVhksII_Rb5Ienz6J8E7Y" target="_blank" rel="noopener noreferrer" className="font-body text-industrial-smoke hover:text-white text-sm transition-colors">
              Apply
            </a>
          </div>
          <p className="font-body text-industrial-smoke text-sm">
            © {new Date().getFullYear()} TNTX
          </p>
        </div>
      </div>
    </footer>
  );
};
