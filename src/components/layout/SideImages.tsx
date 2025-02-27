"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SideImagesProps {
  position: "left" | "right";
  images: {
    top: string;
    bottom: string;
  };
}

// Generate a unique ID per component instance
const generateUniqueID = (position: "left" | "right", type: "top" | "bottom") =>
  `${position}-${type}`;

const SideImages: React.FC<SideImagesProps> = ({ position, images }) => {
  const [activeNoiseID, setActiveNoiseID] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select one of the four images
      const randomPosition = Math.random() > 0.5 ? "left" : "right";
      const randomType = Math.random() > 0.5 ? "top" : "bottom";

      setActiveNoiseID(generateUniqueID(randomPosition, randomType));

      setTimeout(() => setActiveNoiseID(null), 1000); // Remove effect after 1 second
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative w-full h-full flex-col justify-center gap-6 ${
        position === "left" ? "items-start" : "items-end"
      } p-4 hidden lg:flex`} // Hide on mobile/tablet, show on large screens
    >
      {/* Top Image */}
      <div
        className={`relative w-auto h-1/4 max-h-[50vh] md:max-h-[60vh] ${
          activeNoiseID === generateUniqueID(position, "top") ? "shake" : ""
        }`}
      >
        <Image
          src={images.top}
          alt={`${position} Side Image Top`}
          width={200}
          height={600}
          quality={100}
          className="w-auto h-full rounded-lg border border-neon-green shadow-custom"
        />
        {activeNoiseID === generateUniqueID(position, "top") && (
          <div className="absolute inset-0 static-noise-effect"></div>
        )}
      </div>

      {/* Bottom Image */}
      <div
        className={`relative w-auto h-3/5 max-h-[50vh] md:max-h-[60vh] ${
          activeNoiseID === generateUniqueID(position, "bottom") ? "shake" : ""
        }`}
      >
        <Image
          src={images.bottom}
          alt={`${position} Side Image Bottom`}
          width={200}
          height={600}
          quality={100}
          className="w-auto h-full rounded-lg border border-neon-green shadow-custom"
        />
        {activeNoiseID === generateUniqueID(position, "bottom") && (
          <div className="absolute inset-0 static-noise-effect"></div>
        )}
      </div>
    </div>
  );
};

export default SideImages;
