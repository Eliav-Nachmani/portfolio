"use client";

import { useState } from "react";
import Image from "next/image";

const techStack = [
  { front: "react.webp", back: "typescript.webp", label: "React", backLabel: "TypeScript" },
  { front: "next.webp", back: "express.webp", label: "Next.js", backLabel: "Express.js" },
  { front: "node.webp", back: "autho.webp", label: "Node.js", backLabel: "Auth0" },
  { front: "mongodb.webp", back: "restapi.webp", label: "MongoDB", backLabel: "REST API" },
];

const BioText = () => {
  return (
    <div className="flex flex-col justify-center h-full w-full">
      <h1 className="text-3xl font-bold text-neon-green mb-6">Hi, I’m Eliav Nachmani.</h1>

      <p className="text-lg text-white leading-relaxed mb-6">
      I’m a front-end developer & digital designer with a passion for crafting sleek, high-performance web experiences using React, Next.js, and UI/UX principles. I thrive on creating visually striking, highly interactive interfaces that not only look great but also deliver seamless user experiences.
      </p>

      <p className="text-lg text-white leading-relaxed mb-6">
      &nbsp;      </p>

      <h2 className="text-4xl font-bold text-neon-green mb-6">
        What I Bring to the Table:
      </h2>

     

      {/* Technology Grid */}
      <div className="grid grid-cols-4 gap-6">
        {techStack.map((tech, index) => (
          <div key={index} className="relative w-32 h-32 cursor-pointer group overflow-hidden rounded-lg">
            {/* Front Icon & Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-x-full">
              <Image src={`/images/${tech.front}`} alt={tech.label} width={100} height={100} className="rounded-md" />
              <span className="mt-2 text-sm text-white">{tech.label}</span>
            </div>

            {/* Back Icon & Label (Revealed on Hover) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 translate-x-full group-hover:translate-x-0">
              <Image src={`/images/${tech.back}`} alt={tech.backLabel} width={100} height={100} className="rounded-md" />
              <span className="mt-2 text-sm text-white">{tech.backLabel}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BioText;
