"use client";

import React, { useEffect, useState } from "react";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(event.target.value);
    if (newValue > 180) newValue = 180; // ✅ Limit rotation to 180°
    if (newValue < 0) newValue = 0;
    onChange(newValue);
  };

  return (
    <div
      className={`absolute ${
        isMobile
          ? "top-5 left-1/2 transform -translate-x-1/2 w-[85%] h-6" // Mobile: Bigger, horizontally placed
          : "right-20 top-1/2 transform -translate-y-1/2 w-6 h-80" // Desktop: Closer, Bigger
      } bg-black border border-neon-green rounded-full flex justify-center items-center shadow-[0_0_20px_#39ff14]`}
    >
      {/* Hidden Native Slider */}
      <input
        type="range"
        min="0"
        max="180" // ✅ Same limit for both desktop & mobile
        step="1"
        value={value}
        onChange={handleChange}
        className="absolute w-full h-full opacity-0 cursor-pointer"
        style={{
          writingMode: isMobile ? "horizontal-tb" : "vertical-lr",
          WebkitAppearance: "none",
        }}
      />
      {/* Custom Track (Bigger & More Visible) */}
      <div
        className={`absolute ${
          isMobile ? "h-2 w-full" : "w-2 h-[92%]"
        } bg-neon-green rounded-full opacity-80`}
      ></div>
      {/* Custom Thumb (Wider on Desktop, Taller on Mobile) */}
<div
  className="absolute bg-neon-green border-4 border-neon-green shadow-[0_0_15px_#39ff14] pointer-events-none transition-transform rounded-md"
  style={{
    width: isMobile ? "30px" : "80px", // Narrow on mobile, wide on desktop
    height: isMobile ? "50px" : "30px", // Taller on mobile, shorter on desktop
    [isMobile ? "left" : "top"]: `${(value / 180) * 100}%`, // Positions correctly
    transform: isMobile ? "translateX(-50%)" : "translateY(-50%)",
  }}
></div>

    </div>
  );
};

export default Slider;
