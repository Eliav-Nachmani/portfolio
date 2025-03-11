"use client";

import { useEffect, useState } from "react";
import Knob from "@/components/layout/Knob"; // Import the Knob component

const KnobWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("off"); // "off" (transparent) or "red"

  useEffect(() => {
    const overlay = document.getElementById("color-overlay");
    if (!overlay) return;

    // transition effect
    overlay.style.transition = "background-color 1s";

    // Apply colors
    overlay.style.backgroundColor = theme === "off" ? "transparent" : "rgba(255, 0, 0, 0.9)";
  }, [theme]);

  return (
    <div className="relative">
      {/* Color Overlay */}
      <div
        id="color-overlay"
        className="absolute inset-0 z-50 pointer-events-none"
        style={{
          mixBlendMode: "color",
          backgroundColor: "transparent", // Default (off)
        }}
      ></div>

      {/* App Content */}
      {children}

      {/* Pass Theme Control to Knob */}
      <div className="absolute bottom-10 left-6 z-50">
        <Knob setTheme={setTheme} /> {/* Pass the setTheme function */}
      </div>
    </div>
  );
};

export default KnobWrapper;
