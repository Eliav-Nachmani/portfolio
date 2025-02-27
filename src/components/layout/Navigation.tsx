"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeButton, setActiveButton] = useState("About Me");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pathname === "/") setActiveButton("About Me");
    if (pathname === "/projects") setActiveButton("Projects");
    if (pathname === "/contact") setActiveButton("Contact");
  }, [pathname]);

  return (
    <nav
      className="relative w-full h-full flex items-center justify-center border-t border-neon-green overflow-hidden"
      style={{
        backgroundImage: "url('/images/nav-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        border: "none",
      }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

      {/* Navigation Buttons */}
      <div className={`relative flex ${isMobile ? "flex-col space-y-3" : "flex-row space-x-10"}`}>
        {[
          { label: "About Me", path: "/" },
          { label: "Projects", path: "/projects" },
          { label: "Contact", path: "/contact" },
        ].map(({ label, path }, index) => {
          const isActive = activeButton === label;

          return (
            <button
              key={index}
              onClick={() => {
                if (pathname !== path) {
                  setActiveButton(label);
                  router.push(path); // Client-side navigation (prevents full reload)
                }
              }}
              className={`relative px-8 py-4 text-lg font-semibold border border-neon-green rounded-md transition-all duration-300 transform 
                ${
                  isActive
                    ? "bg-white text-black border-neon-green shadow-[inset_0_0_50px_#39ff14] translate-y-[1px]"
                    : "bg-white text-black border-neon-green animate-[pulse-border_1.5s_infinite]"
                }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
