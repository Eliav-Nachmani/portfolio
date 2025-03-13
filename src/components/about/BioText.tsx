"use client";

import Image from "next/image";
import { useState } from "react";

const techStack = [
  { front: "react.webp", back: "typescript.webp", label: "React", backLabel: "TypeScript" },
  { front: "next.webp", back: "express.webp", label: "Next.js", backLabel: "Express.js" },
  { front: "node.webp", back: "auth0.webp", label: "Node.js", backLabel: "Auth0" },
  { front: "mongodb.webp", back: "restapi.webp", label: "MongoDB", backLabel: "REST API" },
];

const BioText = () => {
  return (
    <div className="flex flex-col justify-center h-full w-full">
      <h1 className="text-4xl font-bold text-neon-green mb-6 text-center">
        A Bit About Me.
      </h1>

      <p className="text-md text-white leading-relaxed mb-6 text-center">
        Hi, I'm <span className="font-bold">Eliav Nachmani</span>.<br /><br />
        I build web applications that are efficient, structured, and easy to maintain. My work is mostly focused on React and Next.js, but I also handle backend development when needed, working with Node.js, MongoDB, and REST&nbsp;APIs.
      </p>

      <p className="text-md text-white leading-relaxed mb-6 text-center max-w-3xl mx-auto">
        Coming from a digital design background, I care about how things look and feel, but just as much about how they’re built. My goal is always to write clean, logical code that makes development smoother and the end product&nbsp;better.
      </p>

      <h2 className="text-3xl font-bold text-neon-green mb-6 text-center">
        Tech I Work With:
      </h2>

      {/* Responsive Technology Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        {techStack.map((tech, index) => (
          <div key={index} className="flip-container group">
            <div className="flip-inner">
              {/* Front Icon & Label */}
              <div className="flip-front flex flex-col items-center justify-center w-32 h-32 rounded-lg bg-black relative group-hover:static-noise-hover">
                <div className="relative w-16 h-16"> {/* Adjust size as needed */}
                  <Image
                    src={`/images/${tech.front}`}
                    alt={tech.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-white">{tech.label}</span>
              </div>

              {/* Back Icon & Label */}
              <div className="flip-back flex flex-col items-center justify-center w-32 h-32 rounded-lg bg-black relative group-hover:static-noise-hover">
                <div className="relative w-16 h-16"> {/* Adjust size as needed */}
                  <Image
                    src={`/images/${tech.back}`}
                    alt={tech.backLabel}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-white">{tech.backLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BioText;
