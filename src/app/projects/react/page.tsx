"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/layout/Slider";

const projectData = {
  "task-time-calculator": {
    name: "Task Time Calculator",
    image: "/images/ttc.png",
  },
  "form-builder": {
    name: "Form Builder",
    image: "/images/form-builder.png",
  },
  "portfolio": {
    name: "My Portfolio",
    image: "/images/portfolio.png",
  },
};

const projects = Object.entries(projectData).map(([slug, { name, image }]) => ({
  title: name,
  slug,
  image,
}));

export default function ReactProjectsPage() {
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
    <div className="relative flex flex-col h-full bg-black text-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/main-page-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="relative h-full flex justify-center items-center">
        <div
          className="relative flex items-center justify-center w-full h-full"
          style={{
            transform: `rotate(-${rotation}deg)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          {projects.map((project, index) => {
            const circleSize = isMobile ? `${windowSize / 2.2}px` : "288px";
            const textSize = isMobile
              ? `${Math.max(1.2, Math.min(2.5, windowSize / 600))}rem`
              : "text-2xl";
            const spacing = isMobile ? `${-windowSize / 3.7}px` : "-170px";

            return (
              <Link key={index} href={`/projects/react/${project.slug}`} className="absolute">
                <div
                  className="absolute rounded-full border-2 border-neon-green flex items-center justify-center text-center font-bold cursor-pointer overflow-hidden hover-text-glow"
                  style={{
                    width: circleSize,
                    height: circleSize,
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${index * 120}deg) translateY(${spacing}) rotate(-${index * 120}deg)`,
                    transition: "transform 0.5s ease-out",
                  }}
                >
                  <Image
                    src="/images/sphere.png"
                    alt="Background Sphere"
                    width={300}
                    height={300}
                    className="absolute w-full h-full object-cover rounded-full"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transition: "transform 0.5s ease-out",
                    }}
                    unoptimized
                  />

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="absolute w-full h-full object-cover rounded-full opacity-20 transition-opacity duration-500"
                    unoptimized
                  />

                  <h2
                    className="absolute text-neon-green text-2xl px-4 py-2 rounded-md transition-all duration-300 opacity-100 mix-blend-plus-lighter"
                    style={{
                      fontSize: textSize,
                      transform: `rotate(${rotation}deg)`,
                      transition: "transform 0.5s ease-out",
                    }}
                  >
                    {project.title}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Slider value={rotation} onChange={setRotation} />
    </div>
  );
}
