"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navigation = () => {
  const [activeButton, setActiveButton] = useState("About Me");
  const router = useRouter();
  const pathname = usePathname();

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
      <div className="absolute inset-0 bg-black opacity-35 pointer-events-none"></div>

      {/* Navigation Buttons (Wraps on Small Screens) */}
      <div className="relative flex flex-wrap justify-center gap-3 md:space-x-10 smaller:flex-col smaller:flex-row">
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
                  router.push(path);
                }
              }}
              className={`relative text-sm md:text-lg px-4 md:px-8 py-2 md:py-4 font-semibold border border-neon-green rounded-md transition-all duration-500 ease-in-out transform 
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
