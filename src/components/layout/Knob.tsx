"use client";

import { useState, useRef } from "react";

interface KnobProps {
  setTheme: (theme: string) => void;
}

const Knob: React.FC<KnobProps> = ({ setTheme }) => {
  const [position, setPosition] = useState(0); // 0 = Green (7 o’clock), 1 = Red (12 o’clock), 2 = White (5 o’clock)
  const knobRef = useRef<HTMLDivElement>(null);

  // Define the angles for each step
  const angles = [-120, 0, 120]; // 7 o’clock, 12 o’clock, 5 o’clock

  // Handles rotation snapping based on drag movement
  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    let startY = event.clientY;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      let deltaY = startY - moveEvent.clientY;

      // Determine the new position based on drag amount
      let newPosition;
      if (deltaY > 60) newPosition = 2; // Large drag up → Jump to White (5 o’clock)
      else if (deltaY < -60) newPosition = 0; // Large drag down → Jump to Green (7 o’clock)
      else newPosition = 1; // Small drag → Middle (12 o’clock)

      if (newPosition !== position) {
        setPosition(newPosition);
        updateTheme(newPosition);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Handle clicking the knob to advance to the next step
  const handleKnobClick = () => {
    const newPosition = (position + 1) % 3; // Cycle through positions
    setPosition(newPosition);
    updateTheme(newPosition);
  };

  // Updates the app theme based on position
  const updateTheme = (newPosition: number) => {
    if (newPosition === 0) setTheme("green");
    else if (newPosition === 1) setTheme("red");
    else setTheme("white");
  };

  return (
    <div className="relative flex flex-col items-center cursor-pointer">
      <div
        ref={knobRef}
        onMouseDown={handleMouseDown}
        // onClick={handleKnobClick} // Click still works
        className="relative w-12 h-12 bg-gray-900 border-4 border-neon-green rounded-full shadow-neon select-none flex items-center justify-center"
        style={{
          transform: `rotate(${angles[position]}deg)`,
          transition: "transform 0.5s", // Snaps to steps
        }}
      >
        {/* Knob Indicator */}
        <div className="absolute w-2 h-4 bg-neon-green top-1 left-1/2 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default Knob;
