"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const blendModes: Array<
  "multiply" | "saturation" | "difference" 
> = ["multiply", "saturation", "difference"];

interface HeadshotFlipProps {
  frontImage: string; // Accepts the front image dynamically
}

const HeadshotFlip: React.FC<HeadshotFlipProps> = ({ frontImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentHeadshot, setCurrentHeadshot] = useState("/images/Headshot-1-1.png");
  const [blendMode, setBlendMode] = useState<"multiply" | "saturation" | "difference">("multiply");

  // Toggle between headshots every 1.5 seconds when flipped
  useEffect(() => {
    if (isFlipped) {
      const headshotInterval = setInterval(() => {
        setCurrentHeadshot((prev) =>
          prev === "/images/Headshot-1-1.png" ? "/images/Headshot-2-2.png" : "/images/Headshot-1-1.png"
        );
      }, 1000);
      return () => clearInterval(headshotInterval);
    }
  }, [isFlipped]);

  // Change blend mode randomly every second when flipped
  useEffect(() => {
    if (isFlipped) {
      const blendInterval = setInterval(() => {
        setBlendMode(blendModes[Math.floor(Math.random() * blendModes.length)]);
      }, 1000);
      return () => clearInterval(blendInterval);
    }
  }, [isFlipped]);

  return (
    <div
      className="relative w-full h-full flip-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-inner w-full h-full ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side (Dynamic Image from SideImages) */}
        <div className="flip-front w-full h-full rounded-lg border border-neon-green shadow-custom">
          <Image
            src={frontImage} // Uses the correct image
            alt="Bottom Image"
            width={200}
          height={600}
          quality={100}
          className="w-auto h-full rounded-lg border border-neon-green shadow-custom"
          />
        </div>

        {/* Back Side (Flipped Headshot) */}
        <div className="flip-back w-full h-full rounded-lg border border-neon-green shadow-custom grid content-center">
          <Image
            src={currentHeadshot}
            alt="Headshot"
            width={200}
            height={600}
            quality={100}
            className="rounded-lg "
          />
          {/* Neon Green Overlay with Changing Blend Mode */}
          <div
            className="absolute inset-0 bg-neon-green transition-opacity duration-300 rounded-lg"
            style={{ mixBlendMode: blendMode }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeadshotFlip;
