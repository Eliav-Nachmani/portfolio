import { useState, useEffect, useRef } from "react";


interface KnobProps {
  angle?: number;
  setAngle?: (angle: number) => void;
}

const Knob: React.FC<KnobProps> = ({ angle = -120, setAngle }) => {
  const [localAngle, setLocalAngle] = useState(angle);

  useEffect(() => {
    setLocalAngle(angle);
  }, [angle]);

  const handleStart = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    const startY =
      "touches" in event ? event.touches[0].clientY : event.clientY;
    const startAngle = localAngle;

    const handleMove = (moveEvent: MouseEvent | TouchEvent) => {
      const moveY =
        "touches" in moveEvent
          ? moveEvent.touches[0].clientY
          : (moveEvent as MouseEvent).clientY;

      const deltaY = startY - moveY;
      const newAngle = Math.max(-120, Math.min(120, startAngle + deltaY * 2.5));

      setLocalAngle(newAngle);
      setAngle?.(newAngle); // use prop callback if available
    };

    const cleanup = () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", cleanup);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", cleanup);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", cleanup);
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("touchend", cleanup);
  };

  return (
    <div
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      className="relative w-12 h-12 bg-gray-900 border-4 border-neon-green rounded-full shadow-neon select-none flex items-center justify-center"
      style={{
        transform: `rotate(${localAngle}deg)`,
        transition: "transform 0.1s linear",
      }}
    >
      <div className="absolute w-2 h-4 bg-neon-green top-0 left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
};

export default Knob;
