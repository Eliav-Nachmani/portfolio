"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import projectData from "@/data/projects.json";
import { useEffect, useState } from "react";

export default function ProjectPage() {
    const { slug } = useParams();
    const router = useRouter();
    const projectKeys = Object.keys(projectData);
    const currentIndex = projectKeys.indexOf(slug as string);
    const prevProject = projectKeys[(currentIndex - 1 + projectKeys.length) % projectKeys.length]; // Loop back
    const nextProject = projectKeys[(currentIndex + 1) % projectKeys.length]; // Loop forward
    const project = slug ? projectData[slug as keyof typeof projectData] : null;

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (!project) {
        return <div className="text-center text-neon-green mt-20">Project not found...</div>;
    }

    return (
        <div className="relative flex flex-col min-h-screen bg-black text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url('/images/project-bg.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>

            {/* Navigation Arrows (Placed Outside the Columns) */}
            <div className={`absolute ${isMobile ? "top-2 left-4 w-16" : "top-6 left-6 w-24"} z-50`}>
                <button onClick={() => router.push(`/projects/${prevProject}`)} className="rounded-full hover:border hover:border-neon-green hover:shadow-[0_0_15px_#39ff14] transition-all">
                    <Image
                        src="/images/arrow.png"
                        alt="Previous Project"
                        width={100}
                        height={100}
                        className={`object-contain scale-x-[-1] ${isMobile ? "w-16 h-16" : "w-24 h-24"}`}
                        unoptimized
                    />
                </button>
            </div>
            <div className={`absolute ${isMobile ? "top-2 right-4 w-16" : "top-6 right-6 w-24"} z-50`}>
                <button onClick={() => router.push(`/projects/${nextProject}`)} className="rounded-full hover:border hover:border-neon-green hover:shadow-[0_0_15px_#39ff14] transition-all">
                    <Image
                        src="/images/arrow.png"
                        alt="Next Project"
                        width={100}
                        height={100}
                        className={`object-contain ${isMobile ? "w-16 h-16" : "w-24 h-24"}`}
                        unoptimized
                    />
                </button>
            </div>

            {/* Content Grid */}
            <div className={`relative ${isMobile ? "flex flex-col items-center px-4 gap-6" : "grid grid-cols-12 gap-12 items-start px-8 h-[85vh]"}`}>
                {/* Left Column - Project Name & Details */}
                <div className={`${isMobile ? "w-full flex flex-col space-y-4 mt-[7rem]" : "col-span-3 flex flex-col justify-evenly h-full"}`}>
                    <div className="border border-neon-green p-4 text-lg bg-black">{project.name}</div>
                    <div className="border border-neon-green p-4 bg-black">{project.details}</div>
                </div>

                {/* Center - Project Image */}
                <div className={`${isMobile ? "w-full" : "col-span-6 flex flex-col items-center"}`}>
                    <div className="w-full flex items-center justify-center border-x border-b border-neon-green bg-black">
                        <Image src={project.image} alt={project.name} width={700} height={400} className="w-full h-full object-cover" unoptimized />
                    </div>
                    
                    {/* Buttons Under Image */}
                    <div className={`flex ${isMobile ? "flex-col items-center space-y-4 mt-6" : "justify-center space-x-4 mt-6"}`}>
                        <Link href={project.liveDemo} target="_blank">
                            <button className="border border-neon-green px-6 py-3 bg-black inline-flex items-center hover:bg-neon-green hover:text-black transition">
                                Live Demo
                            </button>
                        </Link>
                        <Link href={project.github} target="_blank">
                            <button className="border border-neon-green px-6 py-3 bg-black inline-flex items-center font-bold hover:bg-neon-green hover:text-black transition">
                                GitHub
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Column - Roles & Technologies */}
                <div className={`${isMobile ? "w-full flex flex-col space-y-4" : "col-span-3 flex flex-col justify-evenly h-full"}`}>
                    <div className="border border-neon-green p-4 bg-black">Roles: {project.roles.join(", ")}</div>
                    <div className="border border-neon-green p-4 bg-black">Tech: {project.technology.join(", ")}</div>
                </div>
            </div>
        </div>
    );
}
