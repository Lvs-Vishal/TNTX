import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

export function NavBar({ items, className }) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine active tab based on current route
  const getActiveTab = () => {
    const match = items.find(item => item.url === location.pathname);
    return match ? match.name : items[0].name;
  };

  const activeTab = getActiveTab();

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-black/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          const isExternal = item.external;

          const linkContent = (
            <>
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <div className="tubelight-glow absolute inset-0 w-full bg-industrial-orange/5 rounded-full -z-10">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-industrial-orange rounded-t-full">
                    <div className="absolute w-12 h-6 bg-industrial-orange/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-industrial-orange/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-industrial-orange/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </div>
              )}
            </>
          );

          const linkClass = cn(
            "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
            "text-white/80 hover:text-industrial-orange",
            isActive && "bg-white/5 text-industrial-orange",
          );

          if (isExternal) {
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                download={item.download}
                className={linkClass}
              >
                {linkContent}
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.url}
              className={linkClass}
            >
              {linkContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
