"use client";

import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative">
      {/* Page Content (85vh) */}
      <div className="relative h-[85vh] flex flex-col-reverse md:flex-row md:grid md:grid-cols-12 items-center gap-4">
        {/* Left Column - Icons */}
        <div className="col-span-3 flex flex-col items-center justify-center space-y-16 bg-black md:space-y-24">
          <div className="grid grid-cols-3 gap-6 md:flex md:flex-col md:space-y-16">
            {/* Email Icon */}
            <Link href="mailto:eliavyep@gmail.com" target="_blank">
              <Image
                src="/images/email-icon.webp"
                alt="Email"
                width={80} // Mobile size
                height={80}
                className="md:w-[120px] md:h-[120px] cursor-pointer border-2 border-neon-green rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#39ff14]"
              />
            </Link>

            {/* LinkedIn Icons */}
            <Link href="https://www.linkedin.com/in/eliav-nachmani/" target="_blank">
              <Image
                src="/images/linkedin-icon.webp"
                alt="LinkedIn"
                width={80} // Mobile size
                height={80}
                className="md:w-[120px] md:h-[120px] cursor-pointer border-2 border-neon-green rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#39ff14]"
              />
            </Link>

            <Link href="Eliav_Nachmani_Resume_2025.pdf" target="_blank" download>
              <Image
                src="/images/resume.webp"
                alt="Resume"
                width={80} // Mobile size
                height={80}
                className="md:w-[120px] md:h-[120px] cursor-pointer border-2 border-neon-green rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#39ff14]"
              />
            </Link>
          </div>
        </div>

        {/* Right Column - Background Image with Chip & Text */}
        <div className="col-span-9 flex items-center justify-center relative w-full h-[85vh]">
          {/* Background Image (Stays within 85vh) */}
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-cover md:bg-right bg-center"
            style={{
              height: "100%", // Ensures background image fills only 85vh
              backgroundImage: "url('/images/contact-bg-2.jpg')",
            }}
          ></div>

          {/* Text Inside Chip Area (Perfectly Contained) */}
          <div
            className="absolute flex flex-col items-center justify-center text-center"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "250px",
            }}
          >
            <p
              className="text-lg md:text-xl lg:text-2xl font-bold text-neon-green tracking-wide break-words animate-flicker"
            >
              LET'S CONNECT! 
            </p>

            <p
              className="text-md md:text-lg lg:text-xl font-bold text-white tracking-wide mt-4 break-words animate-flicker"
              style={{ animationDelay: "0.5s" }}
            >
              I'm open to new opportunities and collaborations — reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
