// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Slider from "@/components/layout/Slider";

// // Project Data with Image Paths
// const projectData = {
//   "task-time-calculator": {
//     name: "Task Time Calculator",
//     image: "/images/ttc.png",
//   },
//   "form-builder": {
//     name: "Form Builder",
//     image: "/images/form-builder.png",
//   },
//   "portfolio": {
//     name: "My Portfolio",
//     image: "/images/portfolio.png",
//   },
// };

// // Convert object to array format for easy mapping
// const projects = Object.entries(projectData).map(([slug, { name, image }]) => ({
//   title: name,
//   slug,
//   image,
// }));

// export default function Projects() {
//   const [rotation, setRotation] = useState(0);
//   const [windowSize, setWindowSize] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const updateSize = () => {
//       setWindowSize(window.innerWidth);
//       setIsMobile(window.innerWidth < 768);
//     };
//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   return (
//     <div className="relative flex flex-col h-[100%] bg-black text-white">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: "url('/images/main-page-bg.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       />
//       <div className="absolute inset-0 bg-black opacity-35 z-0"></div>

     
//       <div className="relative h-[100%] flex justify-center items-center">
//         {/* Project Circles Container */}
//         <div
//           className="relative flex items-center justify-center w-full h-full"
//           style={{
//             transform: `rotate(-${rotation}deg)`,
//             transition: "transform 0.5s ease-out",
//           }}
//         >
//           {projects.map((project, index) => {
//             // ✅ Desktop: Fixed size | Mobile: Adjust to fit 2 circles side by side
//             const circleSize = isMobile ? `${windowSize / 2.2}px` : "288px";
//             const textSize = isMobile
//               ? `${Math.max(1.2, Math.min(2.5, windowSize / 600))}rem`
//               : "text-2xl";
//             const spacing = isMobile ? `${-windowSize / 3.7}px` : "-170px";

//             return (
//               <Link key={index} href={`/projects/${project.slug}`} className="absolute">
//                 <div
//                   className="absolute rounded-full border-2 border-neon-green flex items-center justify-center text-center font-bold cursor-pointer overflow-hidden hover-text-glow"
//                   style={{
//                     width: circleSize,
//                     height: circleSize,
//                     left: "50%",
//                     top: "50%",
//                     transform: `translate(-50%, -50%) rotate(${index * 120}deg) translateY(${spacing}) rotate(-${index * 120}deg)`,
//                     transition: "transform 0.5s ease-out",
//                   }}
//                 >
//                   {/* Sphere Background Image */}
//                   <Image
//                     src="/images/sphere.png"
//                     alt="Background Sphere"
//                     width={300}
//                     height={300}
//                     className="absolute w-full h-full object-cover rounded-full"
//                     style={{
//                       transform: `rotate(${rotation}deg)`, // 🔄 Rotate with slider
//                       transition: "transform 0.5s ease-out",
//                     }}
//                     unoptimized
//                   />

//                   {/* Project Image Overlay (20% Opacity) - Now Rotates */}
//                   <Image
//                     src={project.image}
//                     // src="/images/arrow.png"
//                     alt={project.title}
//                     width={300}
//                     height={300}
//                     className="absolute w-full h-full object-cover rounded-full opacity-20 transition-opacity duration-500 mix-blend-"
//                     // style={{
//                     //   transform: `rotate(${rotation}deg)`, // 🔄 Rotate with slider
//                     //   transition: "transform 0.5s ease-out",
//                     // }}
//                     unoptimized
//                   />

//                   {/* Text Overlay (Also Rotates) */}
//                   <h2
//                     className="absolute text-neon-green text-2xl px-4 py-2 rounded-md transition-all duration-300 opacity-100 mix-blend-plus-lighter"
//                     style={{
//                       fontSize: textSize,
//                       transform: `rotate(${rotation}deg)`, // 🔄 Rotate with slider
//                       transition: "transform 0.5s ease-out",
//                     }}
//                   >
//                     {project.title}
//                   </h2>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>

//       {/* Slider - Desktop (Right Vertical), Mobile (Top Horizontal) */}
//       <Slider value={rotation} onChange={setRotation} />
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const topics = [
  {
    title: "React",
    slug: "react",
    image: "/images/react.webp",
  },
  {
    title: "Webflow",
    slug: "webflow",
    image: "/images/Webflow.png",
  },
  // Add more categories in the future
];

export default function ProjectsMainPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-[url('/images/main-page-bg.webp')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black opacity-80 z-0" />

      {/* Title */}
      <h1 className="z-10 text-4xl md:text-6xl font-bold text-neon-green mb-10 text-center">
        Explore My Projects
      </h1>

      {/* Grid of Topics */}
      <div className={`z-10 grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}>
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/projects/${topic.slug}`}
            className="relative group w-72 h-60 bg-black border border-neon-green rounded-xl overflow-hidden hover:scale-105 transition-transform"
          >
            <Image
              src={topic.image}
              alt={topic.title}
              fill
              className="object-cover opacity-100 group-hover:opacity-20 transition-opacity duration-300"
              unoptimized
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
              <h2 className="text-2xl font-bold text-transparent group-hover:text-neon-green transition">
                {topic.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
