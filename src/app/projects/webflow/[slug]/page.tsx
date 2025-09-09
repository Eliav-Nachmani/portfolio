// app/projects/webflow/[slug]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import projectData from "@/data/projects.json";
import { useEffect, useState, useRef } from "react";

const techIcons: Record<string, string> = {
  "Webflow": "Webflow.png",
  "SalesForce": "SalesForce.png",
  "Figma": "Figma.png",
};

export default function WebflowProjectPage() {
  const { slug } = useParams();
  const router = useRouter();
  const webflowKeys = Object.keys(projectData).filter((key) =>
    key.includes("webflow-")
  );
  const currentIndex = webflowKeys.indexOf(slug as string);
  const prevProject = webflowKeys[(currentIndex - 1 + webflowKeys.length) % webflowKeys.length];
  const nextProject = webflowKeys[(currentIndex + 1) % webflowKeys.length];
  const project = slug ? projectData[slug as keyof typeof projectData] : null;

  const [isStacked, setIsStacked] = useState(false);
  const demoButtonRef = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    const checkStack = () => setIsStacked(window.innerWidth < 1024);
    checkStack();
    window.addEventListener("resize", checkStack);
    return () => window.removeEventListener("resize", checkStack);
  }, []);

 

  if (!project) {
    return <div className="text-center text-neon-green mt-20">Project not found...</div>;
  }

  return (
    <div className="relative flex flex-col h-full bg-black text-white pb-10 pt-2">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="h-full fixed inset-0 bg-[url('/images/project-bg.webp')] bg-cover bg-center bg-no-repeat"></div>
        <div className="fixed inset-0 bg-black opacity-35"></div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-10 left-6 w-16 z-50">
        <button
          onClick={() => router.push(`/projects/webflow/${prevProject}`)}
          className="rounded-full hover:border hover:border-neon-green hover:shadow-[0_0_15px_#39ff14] transition-all"
        >
          <Image
            src="/images/arrow.png"
            alt="Previous Project"
            width={isStacked ? 40 : 70}
            height={isStacked ? 40 : 70}
            className="object-contain scale-x-[-1]"
            unoptimized
          />
        </button>
      </div>
      <div className="absolute top-10 right-2 lg:right-6 w-16 z-50">
        <button
          onClick={() => router.push(`/projects/webflow/${nextProject}`)}
          className="rounded-full hover:border hover:border-neon-green hover:shadow-[0_0_15px_#39ff14] transition-all"
        >
          <Image
            src="/images/arrow.png"
            alt="Next Project"
            width={isStacked ? 40 : 70}
            height={isStacked ? 40 : 70}
            className="object-contain"
            unoptimized
          />
        </button>
      </div>

      {/* Content Grid */}
      <div className={`pb-16 relative ${isStacked ? "flex flex-col items-center px-4 gap-6 mt-4" : "grid grid-cols-12 gap-12 items-start px-8 h-[85vh]"}`}>
        {/* Left Column */}
        <div className={`${isStacked ? "w-full flex flex-col space-y-6 order-1" : "col-span-3 flex flex-col justify-evenly h-full min-h-[250px] text-left"}`}>
          <div className="border border-neon-green p-4 bg-black rounded-lg text-center lg:text-left">
            <span className="block text-neon-green text-lg font-bold mb-2">WEB PAGE</span>
            {project.name}
          </div>
          <div className="border border-neon-green p-4 bg-black rounded-lg">
            <span className="block text-neon-green text-lg font-bold mb-2">DESCRIPTION</span>
            {project.details}
          </div>
        </div>

        {/* Center Image */}
        <div className={`m-auto ${isStacked ? "w-full order-2" : "col-span-6 flex flex-col items-center"}`}>
          <div className="w-full max-h-[68vh] flex items-center justify-center bg-black rounded-lg relative overflow-hidden group mt-0 lg:mt-6">
            <Link href={project.liveDemo} target="_blank">
              <Image
                src={project.image}
                alt={project.name}
                width={700}
                height={400}
                className="w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:shadow-[0_0_20px_#39ff14]"
                unoptimized
              />
            </Link>
          </div>
          <div className={`flex pb-6 w-full ${isStacked ? "flex-col items-center space-y-4 mt-6" : "justify-center space-x-4 mt-6"}`}>
            <Link href={project.liveDemo} target="_blank">
              <button
                ref={demoButtonRef}
                className="border border-neon-green px-6 py-3 bg-black font-bold hover:bg-neon-green hover:text-black transition rounded-lg"
              >
                View Page
              </button>
            </Link>
            
          </div>
        </div>

        {/* Right Column */}
        <div className={`${isStacked ? "w-full order-3 flex flex-col space-y-6" : "col-span-3 flex flex-col justify-evenly h-full min-h-[250px]"}`}>
          <div className="border border-neon-green p-4 bg-black rounded-lg">
            <span className="block text-neon-green text-lg font-bold mb-2">ROLE</span>
            {project.roles.join(", ")}
          </div>
          <div className="border border-neon-green p-4 bg-black rounded-lg">
            <span className="block text-neon-green text-lg font-bold mb-2">TECH</span>
            <div className="grid grid-cols-2 gap-4 justify-items-center mt-2">
              {project.technology.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image src={`/images/${techIcons[tech]}`} alt={tech} width={100} height={100} className="rounded-md" unoptimized />
                  <span className="mt-2 text-sm text-white">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
