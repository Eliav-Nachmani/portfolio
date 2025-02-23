import SideImages from "@/components/layout/SideImages";
import BioText from "@/components/about/BioText";
import Navigation from "@/components/layout/Navigation";

export default function AboutMe() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Top Section: Side Images & About Me (80% Height) */}
      <div className="flex-grow h-[80vh] grid grid-cols-12">
        {/* Left Side Images */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between h-full">
          <SideImages
            position="left"
            images={{
              top: "/images/about-left-1.webp",
              bottom: "/images/about-left-2.webp",
              mobile: "/images/about-left-mobile.webp",
            }}
          />
        </div>

        {/* About Me Section */}
        <div className="col-span-10 md:col-span-8 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-2xl h-full flex flex-col justify-center items-center p-6 border border-neon-green bg-black/80 shadow-neon text-center rounded-lg">
            <BioText />
          </div>
        </div>

        {/* Right Side Images */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between h-full">
          <SideImages
            position="right"
            images={{
              top: "/images/about-right-1.webp",
              bottom: "/images/about-right-2.webp",
              mobile: "/images/about-right-mobile.webp",
            }}
          />
        </div>
      </div>

      {/* Bottom Navigation (20% Height, Pinned to Bottom) */}
      <div className="h-[20vh] flex items-center justify-center">
        <Navigation />
      </div>
    </div>
  );
}
