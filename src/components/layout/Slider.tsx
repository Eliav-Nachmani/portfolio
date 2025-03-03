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
    if (newValue > 180) newValue = 180; // ✅ Both Desktop & Mobile limited to 180°
    if (newValue < 0) newValue = 0;
    onChange(newValue);
  };

  return (
    <div
      className={`absolute ${
        isMobile
          ? "top-5 left-1/2 transform -translate-x-1/2 w-[80%] h-4"
          : "right-10 top-1/2 transform -translate-y-1/2 w-4 h-64"
      } bg-black border border-neon-green rounded-full flex justify-center items-center shadow-neon`}
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
      {/* Custom Track */}
      <div
        className={`absolute ${isMobile ? "h-1 w-full" : "w-1 h-[90%]"} bg-neon-green rounded-full opacity-50`}
      ></div>
      {/* Custom Thumb */}
      <div
        className="absolute w-6 h-6 bg-neon-green border-2 border-neon-green rounded-full shadow-lg pointer-events-none transition-transform"
        style={{
          [isMobile ? "left" : "top"]: `${(value / 180) * 100}%`,
          transform: isMobile ? "translateX(-50%)" : "translateY(-50%)",
        }}
      ></div>
    </div>
  );
};

export default Slider;
