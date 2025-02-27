"use client";

import { motion } from "framer-motion";
import SideImages from "@/components/layout/SideImages";
import BioText from "@/components/about/BioText";
import Navigation from "@/components/layout/Navigation";

export default function AboutMe() {
  return (
    <motion.div 
      initial={{ y: "-100%" }} // Start off-screen at the top
      animate={{ y: "0%" }} // Slide down into view
      exit={{ y: "-100%" }} // Moves back up when navigating away (reverse entrance)
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className="flex flex-col min-h-screen bg-black text-white relative"
    >
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

      {/* Page Content (Slides in from the Top) */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }} // Content starts off-screen at the top
        animate={{ y: "0%", opacity: 1 }} // Slides down into view
        exit={{ y: "-100%", opacity: 0 }} // Moves back up when navigating away
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[85vh] grid grid-cols-12 items-center px-4 md:px-12 gap-4"
      >
        {/* Left Side Images */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between h-full overflow-hidden z-10">
          <SideImages
            position="left"
            images={{
              top: "/images/about-2.jpg",
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
      </motion.div>

      {/* Navbar (Exits Smoothly with the Page) */}
      <motion.div
        initial={{ y: "0%" }} // Navbar is already visible
        exit={{ y: "-100%" }} // Moves back up when navigating away (reverse entrance)
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[15vh] flex items-center justify-center border-t border-neon-green z-10 top-0 left-0 w-full bg-black"
      >
        <Navigation />
      </motion.div>
    </motion.div>
  );
}
