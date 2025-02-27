"use client";

import React from "react";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    console.log("Slider value:", newValue);
    onChange(newValue);
  };

  return (
    <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-4 h-64 bg-black border border-neon-green rounded-full flex justify-center items-center shadow-neon">
      {/* Hidden Native Slider */}
      <input
        type="range"
        min="0"
        max="360"
        step="1"
        value={value}
        onChange={handleChange}
        className="absolute w-full h-full opacity-0 cursor-pointer"
        style={{
          writingMode: "vertical-lr",
          WebkitAppearance: "none",
        }}
      />
      {/* Custom Track */}
      <div className="absolute w-1 h-[90%] bg-neon-green rounded-full opacity-50"></div>
      {/* Custom Thumb (Now Starts at 0%) */}
      <div
        className="absolute w-6 h-6 bg-neon-green border-2 border-neon-green rounded-full shadow-lg pointer-events-none transition-transform"
        style={{ 
          top: `${(value / 360) * 100}%`, // Moves from 0% (top) to 100% (bottom)
          transform: "translateY(-50%)",
        }}
      ></div>
    </div>
  );
};

export default Slider;
