"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useKnob } from "@/components/layout/KnobWrapper"; // ✅ Use shared Knob state
import Knob from "@/components/layout/Knob"; // ✅ Dark Mode Knob

const Navigation = () => {
  const [activeButton, setActiveButton] = useState("About Me");
  const router = useRouter();
  const pathname = usePathname();
  const { angle, setAngle } = useKnob(); // ✅ Connect to shared knob state

  useEffect(() => {
    if (pathname === "/") setActiveButton("About Me");
    if (pathname === "/projects") setActiveButton("Projects");
    if (pathname === "/contact") setActiveButton("Contact");
  }, [pathname]);

  return (
    <nav
      className="relative w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 px-6 py-8 border-t border-neon-green bg-black"
      style={{
        backgroundImage: "url('/images/nav-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Knob: Centered on mobile, left-aligned on larger screens */}
      <div className="sm:mr-6">
        <Knob angle={angle} setAngle={setAngle} />
      </div>

      {/* ✅ Navigation Buttons */}
      <div className="flex flex-wrap justify-center flex-1 gap-3 mt-4 sm:mt-0">
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
    </nav>
  );
};

export default Navigation;
