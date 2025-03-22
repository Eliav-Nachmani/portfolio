"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useKnob } from "@/components/layout/KnobWrapper";
import Knob from "@/components/layout/Knob";

const Navigation = () => {
  const [activeButton, setActiveButton] = useState("About Me");
  const router = useRouter();
  const pathname = usePathname();
  const { angle, setAngle } = useKnob();

  useEffect(() => {
    if (pathname === "/") setActiveButton("About Me");
    if (pathname === "/projects") setActiveButton("Projects");
    if (pathname === "/contact") setActiveButton("Contact");
  }, [pathname]);

  return (
    <nav
      className="relative w-full flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-6 px-6 py-8 border-t border-neon-green bg-black"
      style={{
        backgroundImage: "url('/images/nav-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-0 pointer-events-none"></div>

      {/* ✅ Layout: Horizontal on desktop, stacked on mobile */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 w-full sm:w-auto justify-center z-10">
        {/* 🔘 Knob always comes first */}
        <div className="flex justify-center sm:justify-start">
          <Knob angle={angle} setAngle={setAngle} />
        </div>

        {/* 🔳 Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-8 sm:ml-4 mt-4 sm:mt-0">
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
                className={`text-sm md:text-lg px-4 md:px-8 py-2 md:py-4 font-semibold border border-neon-green rounded-md transition-all duration-500 
                  ${isActive ? "bg-white text-black shadow-[inset_0_0_50px_#39ff14]" : "bg-white text-black"}`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
