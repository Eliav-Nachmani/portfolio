"use client";

import Image from "next/image";

interface SideImagesProps {
  position: "left" | "right";
  images: {
    top: string;
    bottom: string;
  };
}

const SideImages: React.FC<SideImagesProps> = ({ position, images }) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between gap-6 ${
        position === "left" ? "items-start" : "items-end"
      } p-4 md:p-6`}
    >
      <Image
        src={images.top}
        alt={`${position} Side Image Top`}
        width={200}
        height={600} // Adjust height dynamically
        quality={100}
        className="w-auto h-1/2 max-h-[50vh] md:max-h-[60vh] rounded-lg shadow-neon border border-neon-green"
      />
      <Image
        src={images.bottom}
        alt={`${position} Side Image Bottom`}
        width={200}
        height={600} // Adjust height dynamically
        quality={100}
        className="w-auto h-1/2 max-h-[50vh] md:max-h-[60vh] rounded-lg shadow-neon border border-neon-green"
      />
    </div>
  );
};

export default SideImages;
