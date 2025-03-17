"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import projectData from "@/data/projects.json";
import { useEffect, useState, useRef } from "react";

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

    const [isStacked, setIsStacked] = useState(false);
    const demoButtonRef = useRef<HTMLButtonElement>(null);
    const [buttonWidth, setButtonWidth] = useState<string>("auto");

    useEffect(() => {
        const checkStack = () => {
            setIsStacked(window.innerWidth < 1024); // Breaks at lg (1024px)
        };
        checkStack();
        window.addEventListener("resize", checkStack);
        return () => window.removeEventListener("resize", checkStack);
    }, []);

    // Ensure GitHub button matches Live Demo button width
    useEffect(() => {
        if (demoButtonRef.current) {
            setButtonWidth(`${demoButtonRef.current.offsetWidth}px`);
        }
    }, [isStacked]);

    if (!project) {
        return <div className="text-center text-neon-green mt-20">Project not found...</div>;
    }

    return (
        <div className="relative flex flex-col min-h-screen bg-black text-white pb-10 pt-2">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/images/project-bg.webp')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-black opacity-35"></div>
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
                        width={isStacked ? 40 : 70}
                        height={isStacked ? 40 : 70}
                        className="object-contain scale-x-[-1]"
                        unoptimized
                    />
                </button>
            </div>
            <div className="absolute top-10 right-2 lg:right-6 w-16 z-50">
                <button
                    onClick={() => router.push(`/projects/${nextProject}`)}
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
            <div className={`relative ${isStacked ? "flex flex-col items-center px-4 gap-6 mt-4" : "grid grid-cols-12 gap-12 items-start px-8 h-[85vh]"}`}>

                {/* Left Column - Project Details */}
                <div className={`${isStacked ? "w-full flex flex-col space-y-6 order-1" : "col-span-3 flex flex-col justify-evenly h-full min-h-[250px] text-left"}`}>

                    {/* Project Name Box */}
                    <div className="border border-neon-green p-4 bg-black rounded-lg text-center lg:text-left">
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
<div className={`${isStacked ? "w-full order-2" : "col-span-6 flex flex-col items-center"}`}>
    <div className="w-full flex items-center justify-center bg-black rounded-lg relative overflow-hidden group mt-0 lg:mt-6">
        {/* Conditionally remove the link for the portfolio project */}
        {slug === "portfolio" ? (
            <Image
                src={project.image}
                alt={project.name}
                width={700}
                height={400}
                className="w-full h-full object-cover rounded-lg transition-all duration-500"
                unoptimized
            />
        ) : (
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
        )}
    </div>

    {/* Buttons Under Image */}
    <div className={`flex w-full ${isStacked ? "flex-col items-center space-y-4 mt-6" : "justify-center space-x-4 mt-6"}`}>
        {/* Modify Live Demo button only for Portfolio project */}
        {slug === "portfolio" ? (
            <button
                ref={demoButtonRef}
                className="border border-gray-500 px-6 py-3 bg-gray-700 font-bold text-white rounded-lg transition-all duration-300 hover:bg-gray-500 hover:text-gray-300"
            >
                You're already here
            </button>
        ) : (
            <Link href={project.liveDemo} target="_blank">
                <button
                    ref={demoButtonRef}
                    className="border border-neon-green px-6 py-3 bg-black font-bold hover:bg-neon-green hover:text-black transition rounded-lg"
                >
                    Live Demo
                </button>
            </Link>
        )}

        {/* GitHub button remains the same */}
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
                <div className={`${isStacked ? "w-full order-3 flex flex-col space-y-6" : "col-span-3 flex flex-col justify-evenly h-full min-h-[250px]"}`}>

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
