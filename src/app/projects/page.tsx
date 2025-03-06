"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "@/components/layout/Slider";

const projects = [
  { title: "Task Time Calculator", slug: "project-1" },
  { title: "Form Designer", slug: "project-2" },
  { title: "Coming Soon", slug: "project-3" },
];

export default function Projects() {
  const [rotation, setRotation] = useState(0);
  const [windowSize, setWindowSize] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/projects-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      {/* Main Content (85vh) */}
      <div className="relative h-[85vh] flex justify-center items-center">
        {/* Project Circles Container */}
        <div
          className="relative flex items-center justify-center w-full h-full"
          style={{
            transform: `rotate(-${rotation}deg)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          {projects.map((project, index) => {
  // ✅ Desktop: Fixed size | Mobile: 2 circles fill full width
  const circleSize = isMobile
    ? `${windowSize / 2.2}px` // Ensures 2 circles fit side by side
    : "288px";

  const textSize = isMobile
    ? `${Math.max(1.2, Math.min(2.5, windowSize / 600))}rem`
    : "text-2xl";

  const spacing = isMobile
    ? `${-windowSize / 3.7}px` // Positions circles evenly
    : "-170px";

            return (
              <Link key={index} href={`/projects/${project.slug}`} className="absolute">
                <div
                  className="absolute bg-black border border-neon-green rounded-full flex items-center justify-center text-center font-bold cursor-pointer"
                  style={{
                    width: circleSize,
                    height: circleSize,
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${index * 120}deg) translateY(${spacing}) rotate(-${index * 120}deg)`,
                    transition: "transform 0.5s ease-out",
                  }}
                >
                  {/* Text Counter-Rotates to Stay Upright */}
                  <span
                    className="block"
                    style={{
                      fontSize: textSize,
                      transform: `rotate(${rotation}deg)`,
                      transition: "transform 0.5s ease-out",
                    }}
                  >
                    {project.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Slider - Desktop (Right Vertical), Mobile (Top Horizontal) */}
      <Slider value={rotation} onChange={setRotation} />
    </div>
  );
}
