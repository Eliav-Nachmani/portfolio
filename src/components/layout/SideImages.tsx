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
      {/* ✅ Top Image with Reveal Effect (UNCHANGED) */}
      <div
        className="relative w-auto h-1/4 max-h-[50vh] md:max-h-[60vh] overflow-hidden rounded-lg border border-neon-green shadow-custom"
        onMouseEnter={() => setHoveredCard("top")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Back Image (Revealed on Hover) */}
        <Image
          src={position === "left" ? "/images/Headshot.jpg" : "/images/home-office.jpg"} // Different back images per side
          alt={`${position} Side Image Top - Back`}
          width={200}
          height={600}
          quality={100}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
            hoveredCard === "top" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-100"
          }`}
        />

        {/* Front Image (Always Visible) */}
        <Image
          src={images.top}
          alt={`${position} Side Image Top`}
          width={200}
          height={600}
          quality={100}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* ✅ Bottom Image Switches to Black BG + Text on Hover */}
      <div
        className="relative w-auto h-3/5 max-h-[50vh] md:max-h-[60vh] overflow-hidden rounded-lg border border-neon-green shadow-custom flex items-center justify-center"
        onMouseEnter={() => setHoveredCard("bottom")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Black Background Fades in on Hover */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out ${
            hoveredCard === "bottom" ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Text Content on Hover */}
        <div
          className={`absolute text-center text-white px-6 transition-opacity duration-500 ease-in-out ${
            hoveredCard === "bottom" ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xs md:text-sm  font-light">
            {position === "left"
              ? "A couple more Tech & Dev Tools I've been working with throughout my career"
              : "I also worked a lot with these Design & Management Tools"}
          </p>
          <br />
          <h2 className="text-neon-green text-xs lg:text-lg xl:text-xl 2xl:text-2xl font-bold mt-2">
          {position === "left" ? (
              <>
                GitHub <br />
                Vite <br />
                WordPress <br />
                Salesforce <br />
                Pardot
              </>
            ) : (
              <>
                Figma <br />
                Adobe CC <br />
                Asana <br />
                Jira
              </>
            )}
          </h2>
          
        </div>

        {/* Front Image (Always Visible) */}
        <Image
          src={images.bottom}
          alt={`${position} Side Image Bottom`}
          width={200}
          height={600}
          quality={100}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
            hoveredCard === "bottom" ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
};

export default SideImages;
