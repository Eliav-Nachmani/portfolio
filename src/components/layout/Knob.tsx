"use client";

import { useState, useRef } from "react";

interface KnobProps {
  setAngle: (angle: number) => void;
}

const Knob: React.FC<KnobProps> = ({ setAngle }) => {
  const [angle, setLocalAngle] = useState(-60);
  const knobRef = useRef<HTMLDivElement>(null);

  const handleStart = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    
    // Detect touch or mouse event
    const startY =
      "touches" in event
        ? (event as React.TouchEvent).touches[0].clientY
        : (event as React.MouseEvent).clientY;
    
    const startAngle = angle;

    const handleMove = (moveEvent: MouseEvent | TouchEvent) => {
      const moveY =
        "touches" in moveEvent
          ? (moveEvent as TouchEvent).touches[0].clientY
          : (moveEvent as MouseEvent).clientY;

      const deltaY = startY - moveY;
      const newAngle = Math.max(-60, Math.min(60, startAngle + deltaY * 2.5));

      setLocalAngle(newAngle);
      setAngle(newAngle);
    };

    const handleEnd = () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("touchend", handleEnd);
  };

  return (
    <div className="relative flex flex-col items-center cursor-pointer">
      {/* SVG for Circular Text */}
      <svg className="absolute -top-6 w-24 h-24" viewBox="0 0 100 100">
        <defs>
          <path id="curve" d="M 10,50 A 40,40 0 1,1 90,50" />
        </defs>
        <text className="fill-white text-[10px] font-normal uppercase tracking-wide">
          <textPath href="#curve" startOffset="0%" textAnchor="start">
            Dark Mode
          </textPath>
        </text>
      </svg>

      {/* Knob */}
      <div
        ref={knobRef}
        onMouseDown={(e) => handleStart(e)}
        onTouchStart={(e) => handleStart(e)}
        className="relative w-12 h-12 bg-gray-900 border-4 border-neon-green rounded-full shadow-neon select-none flex items-center justify-center"
        style={{
          transform: `rotate(${angle}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        <div className="absolute w-2 h-4 bg-neon-green top-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default Knob;
