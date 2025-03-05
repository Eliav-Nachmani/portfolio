"use client";

import SideImages from "@/components/layout/SideImages";
import BioText from "@/components/about/BioText";

export default function AboutMe() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/main-page-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      {/* Animated Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-effect"></div>
        <div className="glow-effect delay-1"></div>
        <div className="glow-effect delay-2"></div>
      </div>

      {/* Page Content */}
      <div className="relative h-[85vh] grid grid-cols-12 items-center px-4 md:px-12 gap-4">
        {/* Left Side Images */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between h-full overflow-hidden z-10">
          <SideImages
            position="left"
            images={{
              top: "/images/about-3.jpg",
              bottom: "/images/about-left-1.webp",
            }}
          />
        </div>

        {/* About Me Section */}
        <div className="col-span-10 md:col-span-8 flex items-center justify-center h-full overflow-hidden z-10">
          <div className="w-full max-w-3xl h-auto flex flex-col justify-center items-center p-10 border border-neon-green bg-black text-center rounded-lg">
            <BioText />
          </div>
        </div>

        {/* Right Side Images */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between h-full overflow-hidden z-10">
          <SideImages
            position="right"
            images={{
              top: "/images/about-4.jpg",
              bottom: "/images/about-right-1.webp",
            }}
          />
        </div>
      </div>
    </div>
  );
}
