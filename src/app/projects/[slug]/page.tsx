"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import projectData from "@/data/projects.json";
import { useRef, useEffect, useState } from "react";

const techIcons: Record<string, string> = {
  "React": "react.webp",
  "Next.js": "next.webp",
  "TypeScript": "typescript.webp",
  "Node.js": "node.webp",
  "Express": "express.webp",
  "MongoDB": "mongodb.webp",
  "Framer Motion": "framer.webp",
  "REST API": "restapi.webp",
  "Auth0": "auth0.webp",
  "Tailwind CSS": "Tailwind-CSS.webp"
};

export default function ProjectPage() {
  const { slug } = useParams();
  const router = useRouter();
  const projectKeys = Object.keys(projectData);
  const currentIndex = projectKeys.indexOf(slug as string);
  const prevProject = projectKeys[(currentIndex - 1 + projectKeys.length) % projectKeys.length];
  const nextProject = projectKeys[(currentIndex + 1) % projectKeys.length];
  const project = slug ? projectData[slug as keyof typeof projectData] : null;

  const demoButtonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState<string>("auto");

  useEffect(() => {
    if (demoButtonRef.current) {
      setButtonWidth(`${demoButtonRef.current.offsetWidth}px`);
    }
  }, []);

  if (!project) {
    return <div className="text-center text-neon-green mt-20">Project not found...</div>;
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white pb-10 pt-2">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/project-bg.webp')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-10 left-6 w-16 z-50">
        <button
          onClick={() => router.push(`/projects/${prevProject}`)}
          className="rounded-full hover:border hover:border-neon-green hover:shadow-[0_0_15px_#39ff14] transition-all"
        >
          <Image
            src="/images/arrow.png"
            alt="Previous Project"
            width={70}
            height={70}
            className="object-contain scale-x-[-1]"
            unoptimized
          />
        </button>
      </div>
      <div className="absolute top-10 right-2 custom-lg:right-6 w-16 z-50">
        <button
          onClick={() => router.push(`/projects/${nextProject}`)}
          className="rounded-full hover:border hover:border-neon-green hover:shadow-[0_0_15px_#39ff14] transition-all"
        >
          <Image
            src="/images/arrow.png"
            alt="Next Project"
            width={70}
            height={70}
            className="object-contain"
            unoptimized
          />
        </button>
      </div>

      {/* Content Grid (Stacks on `custom-lg`) */}
      <div className="relative grid grid-cols-12 gap-12 items-start px-8 h-[85vh] custom-lg:flex custom-lg:flex-col custom-lg:items-center custom-lg:gap-6 custom-lg:mt-4">

        {/* Left Column - Project Details */}
        <div className="col-span-3 flex flex-col justify-evenly h-full min-h-[250px] text-left custom-lg:w-full custom-lg:order-1 custom-lg:space-y-6">
          {/* Project Name Box */}
          <div className="border border-neon-green p-4 bg-black rounded-lg text-center custom-lg:text-left">
            <span className="block text-neon-green text-lg font-bold mb-2">APP</span>
            {project.name}
          </div>

          {/* Description Box */}
          <div className="border border-neon-green p-4 bg-black rounded-lg">
            <span className="block text-neon-green text-lg font-bold mb-2">DESCRIPTION</span>
            {project.details}
          </div>
        </div>

        {/* Center - Project Image */}
        <div className="col-span-6 flex flex-col items-center custom-lg:w-full custom-lg:order-2">
          <div className="w-full flex items-center justify-center bg-black rounded-lg relative overflow-hidden group mt-0 custom-lg:mt-6">
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

          {/* Buttons Under Image */}
          <div className="flex w-full justify-center space-x-4 mt-6 custom-lg:flex-col custom-lg:items-center custom-lg:space-y-4">
            <Link href={project.liveDemo} target="_blank">
              <button
                ref={demoButtonRef}
                className="border border-neon-green px-6 py-3 bg-black font-bold hover:bg-neon-green hover:text-black transition rounded-lg"
              >
                Live Demo
              </button>
            </Link>
            <Link href={project.github} target="_blank">
              <button
                style={{ minWidth: buttonWidth }}
                className="border border-neon-green px-6 py-3 bg-black font-bold hover:bg-neon-green hover:text-black transition rounded-lg"
              >
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column - Role & Technologies */}
        <div className="col-span-3 flex flex-col justify-evenly h-full min-h-[250px] custom-lg:w-full custom-lg:order-3 custom-lg:space-y-6">
          {/* Role Box */}
          <div className="border border-neon-green p-4 bg-black rounded-lg">
            <span className="block text-neon-green text-lg font-bold mb-2">ROLE</span>
            {project.roles.join(", ")}
          </div>

          {/* Technology Box */}
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
