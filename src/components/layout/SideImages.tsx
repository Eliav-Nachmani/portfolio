"use client";

import { useState } from "react";
import Image from "next/image";

interface SideImagesProps {
  position: "left" | "right";
  images: {
    top: string;
    bottom: string;
  };
}

const SideImages: React.FC<SideImagesProps> = ({ position, images }) => {
  const [hoveredCard, setHoveredCard] = useState<"top" | "bottom" | null>(null);

  return (
    <div
      className={`relative w-full h-full flex-col justify-center gap-6 ${
        position === "left" ? "items-start" : "items-end"
      } p-4 hidden lg:flex`} // Hide on mobile/tablet, show on large screens
    >
      {/* Top Image with Reveal Effect */}
      <div
        className="relative w-auto h-1/4 max-h-[50vh] md:max-h-[60vh] overflow-hidden rounded-lg border border-neon-green shadow-custom"
        onMouseEnter={() => setHoveredCard("top")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Back Image (Revealed on Hover) */}
        <Image
          src={position === "left" ? "/images/Headshot-1.png" : "/images/Headshot-2.png"} // Different back images per side
          alt={`${position} Side Image Top - Back`}
          width={200}
          height={600}
          quality={100}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out bg-black border-r border-neon-green shadow-[0_0_15px_#39ff14] ${
            hoveredCard === "top" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-100"
          }`}
        />
        
        {/* Front Image */}
        <Image
          src={images.top}
          alt={`${position} Side Image Top`}
          width={200}
          height={600}
          quality={100}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Bottom Image with Reveal Effect */}
      <div
        className="relative w-auto h-3/5 max-h-[50vh] md:max-h-[60vh] overflow-hidden rounded-lg border border-neon-green shadow-custom"
        onMouseEnter={() => setHoveredCard("bottom")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Back Image (Revealed on Hover) */}
        <Image
          src={position === "left" ? "/images/Headshot-1-1.png" : "/images/Headshot-2-2.png"} // Different back images per side
          alt={`${position} Side Image Bottom - Back`}
          width={200}
          height={600}
          quality={100}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
            hoveredCard === "bottom" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-100"
          }`}
        />
        
        {/* Front Image */}
        <Image
          src={images.bottom}
          alt={`${position} Side Image Bottom`}
          width={200}
          height={600}
          quality={100}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default SideImages;
