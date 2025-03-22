"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Knob from "./Knob";

interface KnobContextType {
  angle: number;
  setAngle: (angle: number) => void;
}

// ✅ Create context
const KnobContext = createContext<KnobContextType | null>(null);

// ✅ Export hook to use knob state anywhere
export const useKnob = () => {
  const context = useContext(KnobContext);
  if (!context) throw new Error("useKnob must be used inside KnobWrapper");
  return context;
};

const KnobWrapper = ({ children }: { children: React.ReactNode }) => {
  // ✅ Store Knob position in `localStorage` to persist across page reloads
  const [angle, setAngle] = useState(() => {
    if (typeof window !== "undefined") {
      return Number(localStorage.getItem("knob-angle")) || -120;
    }
    return -120;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("knob-angle", String(angle));
    }
  }, [angle]); // ✅ Save new angle on change

  // 🔴 HIDDEN Knob (Only for logic, not visible)
  return (
    <KnobContext.Provider value={{ angle, setAngle }}>
      <div className="relative">
        {children}

        {/* ✅ Hidden Working Knob (Controls Overlay) */}
        <div className="hidden">
          <Knob />
        </div>

        {/* ✅ Red Overlay (Controlled by Knob) */}
        <div
          id="color-overlay"
          className="absolute inset-0 z-50 pointer-events-none"
          style={{
            mixBlendMode: "multiply",
            backgroundColor: `rgba(255, 0, 0, ${((angle + 120) / 240) * 0.9})`,
          }}
        ></div>
      </div>
    </KnobContext.Provider>
  );
};

export default KnobWrapper;
