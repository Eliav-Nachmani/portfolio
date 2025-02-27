"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Slider from "@/components/layout/Slider";

export default function Projects() {
  const [rotation, setRotation] = useState(0);

  return (
    <motion.div 
      initial={{ y: "100%" }} // Projects page starts at the bottom
      animate={{ y: "0%" }} // Moves into view
      exit={{ y: "-100%" }} // Slides up when leaving
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className="relative flex flex-col min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Animated Navigation Bar (Moves Up to Top) */}
      <motion.div
        initial={{ y: "100%" }} // Navbar starts at the bottom
        animate={{ y: "0%" }} // Moves to the top
        exit={{ y: "-100%" }} // Exits smoothly when leaving
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[15vh] flex items-center justify-center border-b border-neon-green z-10 fixed top-0 left-0 w-full bg-black"
      >
        <Navigation />
      </motion.div>

      {/* Animated Main Content (Slides Up with Navbar) */}
      <motion.div
        initial={{ y: "100%" }} // Starts off-screen at the bottom
        animate={{ y: "0%" }} // Moves into position
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="flex-grow flex justify-center items-center relative pt-[15vh]" 
      >
        {/* Project Circles Container */}
        <div
          className="relative flex items-center justify-center"
          style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.5s ease-out" }}
        >
          {/* Project Circles */}
          {["Project 1", "Project 2", "Project 3"].map((title, index) => (
            <div
              key={index}
              className="absolute w-72 h-72 bg-black border border-neon-green rounded-full flex items-center justify-center text-center text-2xl font-bold"
              style={{
                transform: `rotate(${index * 120}deg) translateY(-170px) rotate(-${index * 120}deg) rotate(-${rotation}deg)`,
              }}
            >
              {title}
            </div>
          ))}
        </div>

        {/* Right-Side Slider */}
        <Slider value={rotation} onChange={setRotation} />
      </motion.div>
    </motion.div>
  );
}
