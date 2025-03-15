"use client";

import Image from "next/image";
import Link from "next/link";
import FlickerIn from "@/components/layout/FlickerIn";



export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative">
      {/* Full-Screen Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/main-page-bg.webp')",
        }}
      ></div>

      {/* Page Content - Ensures Everything is Centered */}
      <div className="relative flex flex-col-reverse md:flex-row md:grid md:grid-cols-12 items-center justify-center min-h-screen gap-10 md:gap-0">
        {/* Left Column - Contact Icons */}
        <div className="col-span-3 flex flex-col items-center justify-center space-y-16 md:space-y-24 relative z-10 h-full">
          <div className="grid grid-cols-3 gap-6 md:flex md:flex-col md:space-y-16">
            {/* Email Icon */}
            <Link href="mailto:eliavyep@gmail.com" target="_blank">
              <Image
                src="/images/email-icon.webp"
                alt="Email"
                width={80}
                height={80}
                className="md:w-[120px] md:h-[120px] cursor-pointer border border-neon-green rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.6)] transition-all duration-300 hover:shadow-[0_0_15px_#39ff14]"
              />
            </Link>

            {/* LinkedIn Icon */}
            <Link href="https://www.linkedin.com/in/eliav-nachmani/" target="_blank">
              <Image
                src="/images/linkedin-icon.webp"
                alt="LinkedIn"
                width={80}
                height={80}
                className="md:w-[120px] md:h-[120px] cursor-pointer border border-neon-green rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.6)] transition-all duration-300 hover:shadow-[0_0_15px_#39ff14]"
              />
            </Link>

            {/* Resume Download Icon */}
            <Link href="/resume.pdf" target="_blank">
              <Image
                src="/images/resume.webp"
                alt="Resume"
                width={80}
                height={80}
                className="md:w-[120px] md:h-[120px] cursor-pointer border border-neon-green rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.6)] transition-all duration-300 hover:shadow-[0_0_15px_#39ff14]"
              />
            </Link>
          </div>
        </div>

        {/* Right Column - Chip Design with Contained Text */}
        <div className="col-span-9 flex items-center justify-center relative w-full h-full ">
          {/* Chip Container */}
          <div className="relative flex flex-col items-center justify-center w-full max-w-[700px] m-4 rounded-lg transition-all duration-300 floating">
            {/* Chip Image */}
            <Image
              src="/images/chip-4.png"
              alt="Chip Background"
              width={700}
              height={700}
              className="w-full max-w-[700px] h-auto rounded-lg grow"
            />

            {/* Text Inside Chip - Fully Contained with Padding & Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-14 max-w-[60%] mx-auto rotate-[42deg] skew-x-[-10deg] -mt-[40px] sm:-mt-[100px] ">
             
              <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-neon-green tracking-wide animate-flicker leading-[1] fade-in">
                Let's Connect!
              </h1>
              
              <h2
                className="fade-in text-sm md:text-lg lg:text-xl text-white tracking-wide mt-6 animate-flicker leading-[1] "
                
              >
                I'm open to new opportunities and collaborations.<br /><br /><b>reach out!</b>
              </h2>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
