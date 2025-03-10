"use client";

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
      <h1 className="text-4xl font-bold text-neon-green mb-6 text-center">
        A Bit About Me.
      </h1>

      <p className="text-md text-white leading-relaxed mb-6 text-center">
        Hi, I'm ELIAV NACHMANI,<br />
        I’m a front-end developer & digital designer with a passion for crafting sleek, high-performance web experiences using React, Next.js, and UI/UX principles.
        I thrive on creating visually striking, highly interactive interfaces that not only look great but also deliver seamless user experiences.
      </p>

      <p className="text-md text-white leading-relaxed mb-6 text-center max-w-3xl mx-auto">
        I build structured, scalable applications with a focus on efficiency and performance.
        Every project starts with clean, maintainable code, ensuring long-term reliability.
      </p>

      <p className="text-md text-white leading-relaxed mb-6 text-center max-w-3xl mx-auto">
        Beyond functionality, I care about usability. I bridge logic and design to create
        seamless experiences that are intuitive and polished.
      </p>

      <h2 className="text-3xl font-bold text-neon-green mb-6 text-center">
        Tech I Work With:
      </h2>

      {/* Responsive Technology Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center w-32 h-32 cursor-pointer group overflow-hidden rounded-lg relative">
            {/* Front Icon & Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 md:group-hover:-translate-x-full">
              <Image src={`/images/${tech.front}`} alt={tech.label} width={80} height={80} className="rounded-md object-contain" />
              <span className="mt-2 text-sm text-white">{tech.label}</span>
            </div>

            {/* Back Icon & Label (Revealed on Hover, Only on Desktop) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 translate-x-full md:group-hover:translate-x-0">
              <Image src={`/images/${tech.back}`} alt={tech.backLabel} width={80} height={80} className="rounded-md object-contain" />
              <span className="mt-2 text-sm text-white">{tech.backLabel}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BioText;
