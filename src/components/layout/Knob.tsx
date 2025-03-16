"use client";

import { useState, useRef } from "react";

interface KnobProps {
  setAngle: (angle: number) => void;
}

const Knob: React.FC<KnobProps> = ({ setAngle }) => {
  const [angle, setLocalAngle] = useState(-120);
  const knobRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    let startY = event.clientY;
    let startAngle = angle;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      let deltaY = startY - moveEvent.clientY;
      let newAngle = Math.max(-120, Math.min(120, startAngle + deltaY * 2.5));

      setLocalAngle(newAngle);
      setAngle(newAngle);
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
      {/* SVG for Circular Text */}
      <svg className="absolute -top-6 w-24 h-24" viewBox="0 0 100 100">
        <defs>
          <path
            id="curve"
            d="M 10,50 A 40,40 0 1,1 90,50" // Creates a half-circle path
          />
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
        onMouseDown={handleMouseDown}
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
