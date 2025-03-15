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

const bioText = `Hi, I'm Eliav Nachmani.

I build web applications that are efficient, structured, and easy to maintain. My work is mostly focused on React and Next.js, but I also handle backend development when needed, working with Node.js, MongoDB, and REST APIs.

Coming from a digital design background, I care about how things look and feel, but just as much about how they’re built. My goal is always to write clean, logical code that makes development smoother and the end product better.`;

const BioText = () => {
  const [showTechHeadline, setShowTechHeadline] = useState(false);
  const [showTechIcons, setShowTechIcons] = useState(false);

  return (
    <div className="flex flex-col justify-center h-full w-full">
      {/* ✅ Main Headline */}
      <h1 className="text-2xl font-bold text-neon-green mb-6 text-left">A Bit About Me.</h1>

      {/* ✅ Bio Text Typing Effect (Prevents layout shift) */}
      <div className="relative w-full max-w-3xl mx-auto text-white font-mono text-left leading-relaxed">
        <p className="invisible whitespace-pre-wrap">{bioText}</p>
        <p className="absolute top-0 left-0">
          <TypingEffect text={bioText} speed={50} onComplete={() => setShowTechHeadline(true)} />
        </p>
      </div>

      {/* ✅ Tech Section Headline (Appears after Bio finishes typing) */}
      {showTechHeadline && (
        <div className="relative w-full max-w-3xl mx-auto text-left mt-8">
          <h2 className="text-neon-green font-bold">
            <TypingEffect
              text="Tech I Work With:"
              speed={70}
              delay={500} // Small delay before typing starts
              onComplete={() => setShowTechIcons(true)}
            />
          </h2>
          <br />
        </div>
      )}

      {/* ✅ Tech Icons (Fade in after headline finishes typing) */}
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center transition-opacity duration-1000 ${showTechIcons ? "opacity-100" : "opacity-0"
          }`}
      >
        {techStack.map((tech, index) => (
          <div key={index} className="flip-container group">
            <div className="flip-inner">
              {/* Front Icon & Label */}
              <div className="flip-front flex flex-col items-center justify-center w-32 h-32 rounded-lg bg-black relative ">
                <div className="relative w-24 h-24 transition-opacity duration-1000">
                  <Image
                    src={`/images/${tech.front}`}
                    alt={tech.label}
                    fill
                    className="object-contain rounded-lg "
                  />
                </div>
                <span className="mt-2 text-sm text-white">{tech.label}</span>
              </div>

              {/* Back Icon & Label */}
              <div className="flip-back flex flex-col items-center justify-center w-32 h-32 rounded-lg bg-black relative overflow-hidden">
                {/* Black Overlay (Ensures it's above the image but below the text) */}
               

                {/* Image (Placed under the overlay using z-index) */}
                <div className="relative w-24 h-24 transition-opacity duration-1000 z-0 relative">
                <div className="absolute inset-0 bg-neon-green opacity-80 z-10 rounded-lg mix-blend-multiply"></div>
                  <Image
                    src={`/images/${tech.back}`}
                    alt={tech.backLabel}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>

                {/* Text (Ensuring it stays above everything) */}
                <span className="mt-2 text-sm text-white relative z-20">{tech.backLabel}</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BioText;
