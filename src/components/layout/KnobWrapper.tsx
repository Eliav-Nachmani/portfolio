"use client";

import { useEffect, useState } from "react";
import Knob from "@/components/layout/Knob"; // Import the Knob component

const KnobWrapper = ({ children }: { children: React.ReactNode }) => {
  const [angle, setAngle] = useState(-120); // Default knob position
  const [opacity, setOpacity] = useState(0); // Dynamic opacity

  useEffect(() => {
    const overlay = document.getElementById("color-overlay");
    if (!overlay) return;

    // Map angle (-120 to 120) to opacity (0 to 0.9)
    const newOpacity = ((angle + 120) / 240) * 0.9; // Normalize range

    // Smooth transition effect
    overlay.style.transition = "background-color 0.3s ease-out";
    overlay.style.backgroundColor = `rgba(255, 0, 0, ${newOpacity.toFixed(2)})`; // Update transparency
    setOpacity(newOpacity); // Update state for reference
  }, [angle]);

  return (
    <div className="relative">
      {/* App Content */}
      {children}

      {/* Pass Theme Control to Knob */}
      <div className="absolute bottom-[4%] smaller:bottom-[6%] left-8 z-50">
        <Knob setAngle={setAngle} /> {/* Pass function to update angle */}
      </div>

      {/* Color Overlay */}
      <div
        id="color-overlay"
        className="absolute inset-0 z-50 pointer-events-none"
        style={{
          mixBlendMode: "multiply",
          backgroundColor: `rgba(255, 0, 0, ${opacity.toFixed(2)})`, // Controlled by knob
        }}
      ></div>
    </div>
  );
};

export default KnobWrapper;
