"use client";

import { useEffect, useState } from "react";
import Knob from "@/components/layout/Knob";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeButton, setActiveButton] = useState("About Me");
  const [theme, setTheme] = useState("green");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Update the overlay color when theme changes
    const overlay = document.getElementById("color-overlay");
    if (overlay) {
      overlay.style.backgroundColor =
        theme === "green"
          ? "transparent"
          : theme === "red"
          ? "rgba(255, 0, 0, 0.9)"
          : "rgba(255, 232, 0, 1)";
    }
  }, [theme]);

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

      {/* Navigation Controls */}
      <div className={`relative flex items-center ${isMobile ? "flex-col space-y-3" : "flex-row space-x-10"}`}>
        {/* Knob (Color Theme Switcher) */}
        <Knob setTheme={setTheme} />

        {/* Navigation Buttons */}
        {["About Me", "Projects", "Contact"].map((label, index) => {
          const isActive = activeButton === label;

          return (
            <button
              key={index}
              onClick={() => setActiveButton(label)}
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
