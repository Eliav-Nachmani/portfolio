"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="absolute bottom-0 left-0 w-full flex justify-center bg-black/80 p-4">
      <div
        className={`flex ${
          isMobile ? "space-x-2" : "space-x-12"
        } transform rotate-[-2deg]`}
      >
        <Link
          href="/"
          className={`text-lg font-semibold border border-neon-green p-2 md:p-3 rounded-md hover:bg-neon-green hover:text-black transition shadow-neon ${
            isMobile ? "text-sm px-3" : ""
          }`}
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className={`text-lg font-semibold border border-neon-green p-2 md:p-3 rounded-md hover:bg-neon-green hover:text-black transition shadow-neon ${
            isMobile ? "text-sm px-3" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`text-lg font-semibold border border-neon-green p-2 md:p-3 rounded-md hover:bg-neon-green hover:text-black transition shadow-neon ${
            isMobile ? "text-sm px-3" : ""
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
