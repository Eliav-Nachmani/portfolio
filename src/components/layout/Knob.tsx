"use client";

import { useState, useRef } from "react";

interface KnobProps {
  setTheme: (theme: string) => void;
}

const Knob: React.FC<KnobProps> = ({ setTheme }) => {
  const [angle, setAngle] = useState(-120); // Starts at 7 o’clock
  const knobRef = useRef<HTMLDivElement>(null);

  // Handle Mouse Drag Rotation
  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    let startY = event.clientY;
    let startAngle = angle;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      let deltaY = startY - moveEvent.clientY;
      let newAngle = Math.max(-120, Math.min(120, startAngle + deltaY * 1)); // Smooth rotation limit

      setAngle(newAngle);

      // Update theme based on rotation range
      if (newAngle < 0) setTheme("off"); // 7 o’clock = Transparent
      else setTheme("red"); // 5 o’clock = Red
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="relative flex flex-col items-center cursor-pointer">
      <div
        ref={knobRef}
        onMouseDown={handleMouseDown}
        className="relative w-12 h-12 bg-gray-900 border-4 border-neon-green rounded-full shadow-neon select-none flex items-center justify-center"
        style={{
          transform: `rotate(${angle}deg)`,
          transition: "transform 0.1s linear", // Smooth rotation
        }}
      >
        {/* Knob Indicator */}
        <div className="absolute w-2 h-4 bg-neon-green top-1 left-1/2 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default Knob;
