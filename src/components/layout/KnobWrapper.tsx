"use client";

import { useEffect, useState } from "react";

const KnobWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("green");

  useEffect(() => {
    const overlay = document.getElementById("color-overlay");
    if (!overlay) return;

    switch (theme) {
      case "green":
        overlay.style.backgroundColor = "transparent";
        break;
      case "red":
        overlay.style.backgroundColor = "rgba(255, 0, 0, 1)";
        break;
      case "white":
        overlay.style.backgroundColor = "rgba(255, 255, 255, 1)";
        break;
    }
  }, [theme]);

  return (
    <div className="relative">
      {/* Color Overlay */}
      <div
        id="color-overlay"
        className="absolute inset-0 z-50 pointer-events-none transition-all duration-500"
        style={{
          mixBlendMode: "color",
          backgroundColor: "rgba(0, 255, 0, 0)", // Default green
        }}
      ></div>

      {/* App Content */}
      {children}
    </div>
  );
};

export default KnobWrapper;
