"use client";

import Image from "next/image";
import Link from "next/link";
import TypingEffect from "@/components/layout/TypingEffect";

export default function Contact() {
  return (
    <div className="relative flex flex-col h-full min-h-full bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/main-page-bg.webp')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-35 z-0"></div>

      {/* Shared Curved Path Definition */}
      <svg width="0" height="0">
        <defs>
          <path id="sharedCurve" d="M 10,90 Q 30,10 90,10" fill="transparent" />
        </defs>
      </svg>

      {/* ✅ Page Content (Enforce Height) */}
      <div className="relative gap-12 flex flex-col-reverse md:grid md:grid-cols-12 items-center justify-center w-full h-full min-h-full">
        {/* ✅ Left Column - Contact Icons */}
        <div className="col-span-3 flex flex-col items-center justify-center space-y-16 md:space-y-24 relative z-10">
          <div className="grid grid-cols-3 gap-24 smaller:gap-6 sm:gap-24 md:gap-8 md:flex md:flex-col md:space-y-16 transition-all duration-500 ease-in-out transform">
            {[
              { href: "mailto:eliavyep@gmail.com", src: "/images/email-icon.webp", label: "Email" },
              { href: "https://www.linkedin.com/in/eliav-nachmani/", src: "/images/linkedin-icon.webp", label: "LinkedIn" },
              { href: "/Resume-2025.pdf", src: "/images/resume.webp", label: "Resume" },
            ].map(({ href, src, label }, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_#39ff14] border border-transparent hover:border-neon-green rounded-lg cursor-pointer"
              >
                {/* Shared Curved Text */}
                <svg width="140" height="80" className="absolute -top-9 lg:-top-10 -left-9 lg:-left-10">
                  <text className="uppercase text-[10px] md:text-[12px] font-bold fill-neon-green drop-shadow-[1px_1px_3px_rgba(0,0,0,1)]">
                    <textPath href="#sharedCurve" startOffset="50%" textAnchor="middle">
                      {label}
                    </textPath>
                  </text>
                </svg>

                {/* Icons */}
                <Link href={href} target="_blank" className="relative z-50 block">
                  <Image
                    src={src}
                    alt={label}
                    width={300}
                    height={300}
                    className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.6)]"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Right Column - Chip Design */}
        <div className="col-span-9 flex items-center justify-center relative w-full ">
          {/* ✅ Chip Container - Ensures Full Height */}
          <div className="relative flex flex-col items-center justify-center w-full max-w-[700px] m-4 rounded-lg transition-all duration-300 floating">
            {/* Chip Image */}
            <Image
              src="/images/chip-4.png"
              alt="Chip Background"
              width={700}
              height={700}
              className="w-full max-w-[700px] h-auto rounded-lg grow"
            />

            {/* ✅ Text Inside Chip - Now Fully Contained */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-1 sm:gap-3 p-6 md:p-14 max-w-[60%] mx-auto rotate-[42deg] skew-x-[-10deg] -mt-[50px] sm:-mt-[100px]">
              <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-neon-green tracking-wide animate-flicker leading-[1] fade-in">
                Let&apos;s Connect!
              </h1>
             
              <TypingEffect
                text="I&apos;m always open to new opportunities."
                speed={130}
                className="text-md font-normal leading-1"
              />
             
              <TypingEffect
                text="Reach out!"
                speed={100}
                delay={5000}
                className="text-xl font-bold leading-1 text-neon-green"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}