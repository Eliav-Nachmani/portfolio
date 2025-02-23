import SideImages from "@/components/layout/SideImages";
import BioText from "@/components/about/BioText";
import Navigation from "@/components/layout/Navigation";

export default function AboutMe() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Top Section: Side Images & About Me */}
      <div className="flex-grow grid grid-cols-12">
        {/* Left Side Images */}
        <div className="col-span-2 flex flex-col justify-between">
          <SideImages
            position="left"
            images={{
              top: "/images/about-left-1.webp",
              bottom: "/images/about-left-2.webp",
            }}
          />
        </div>

        {/* About Me Section */}
        <div className="col-span-8 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-2xl h-full flex flex-col justify-center items-center p-6 border border-neon-green bg-black/80 shadow-neon text-center rounded-lg">
            <BioText />
          </div>
        </div>

        {/* Right Side Images */}
        <div className="col-span-2 flex flex-col justify-between">
          <SideImages
            position="right"
            images={{
              top: "/images/about-right-1.webp",
              bottom: "/images/about-right-2.webp",
            }}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="h-24 flex items-center justify-center">
        <Navigation />
      </div>
    </div>
  );
}
