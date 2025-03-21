"use client";

import Image from "next/image";
import { useState } from "react";
import TypingEffect from "../layout/TypingEffect";

const techStack = [
  { front: "react.webp", back: "typescript.webp", label: "React", backLabel: "TypeScript" },
  { front: "next.webp", back: "express.webp", label: "Next.js", backLabel: "Express.js" },
  { front: "node.webp", back: "auth0.webp", label: "Node.js", backLabel: "Auth0" },
  { front: "mongodb.webp", back: "restapi.webp", label: "MongoDB", backLabel: "REST API" },
];

const BioText = () => {
  const [contentVisible, setContentVisible] = useState(false);

  return (
    <div className="flex flex-col justify-center h-full w-full">
      {/* ✅ Main Headline */}
      <h1 className="text-2xl font-bold text-neon-green mb-6 text-left">A Bit About Me.</h1>

      {/* ✅ Content Container (Fades in after typing finishes) */}
      <div className=" relative w-full max-w-3xl mx-auto text-white font-mono text-left leading-relaxed">
        {/* ✅ Animated Name (Typing Effect) */}
        <TypingEffect 
          text="Hi, I'm Eliav Nachmani."
          speed={100} 
          className="text-md font-normal"
          onComplete={() => setContentVisible(true)}
        />

        {/* ✅ Rest of the content fades in */}
        <div className={`transition-opacity duration-1000 ${contentVisible ? "opacity-100" : "opacity-0"}`}>
          {/* ✅ Static Second Paragraph */}
          <p className="mb-4 mt-2">
            I build web applications that are efficient, structured, and easy to maintain. My work is mostly focused 
            on React and Next.js, but I also handle backend development when needed, working with Node.js, MongoDB, and REST APIs.
          </p>

          {/* ✅ Static Third Paragraph */}
          <p className="mb-4">
            Coming from a digital design background, I care about how things look and feel, but just as much about how they’re built.
            My goal is always to write clean, logical code that makes development smoother and the end product better.
          </p>

          {/* ✅ Tech Stack Headline */}
          <h2 className="text-neon-green font-bold mt-6">Tech I Work With:</h2>

          {/* ✅ Tech Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center mt-4">
            {techStack.map((tech, index) => (
              <div key={index} className="flip-container group">
                <div className="flip-inner">
                  {/* Front Icon & Label */}
                  <div className="flip-front flex flex-col items-center justify-center w-32 h-32 rounded-lg bg-black">
                    <Image src={`/images/${tech.front}`} alt={tech.label} width={96} height={96} className="object-contain rounded-lg" />
                    <span className="mt-2 text-sm text-white">{tech.label}</span>
                  </div>

                  {/* Back Icon & Label */}
                  <div className="flip-back flex flex-col items-center justify-center w-32 h-32 rounded-lg bg-black overflow-hidden">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-neon-green opacity-80 z-10 rounded-lg mix-blend-multiply"></div>

                    {/* Image */}
                    <Image src={`/images/${tech.back}`} alt={tech.backLabel} width={96} height={96} className="object-contain rounded-lg z-0" />

                    {/* Text */}
                    <span className="mt-2 text-sm text-white relative z-20">{tech.backLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default BioText;
