"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "@/components/layout/Navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showNoise, setShowNoise] = useState(false);
  const [currentPage, setCurrentPage] = useState(children);

  useEffect(() => {
    setShowNoise(true); // Show static effect

    // Delay rendering new page until effect fades out
    const timer = setTimeout(() => {
      setCurrentPage(children);
      setTimeout(() => setShowNoise(false), 200);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* ✅ Static Noise Effect */}
      {showNoise && (
        <div className="fixed inset-0 w-full h-screen z-[9999] flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 static-noise-effect opacity-80 animate-static-fade"></div>
        </div>
      )}

      {/* ✅ Main Content (Scrollable Inside) */}
      <div className=" relative w-full flex-1 overflow-auto">
        {currentPage}
      </div>

      {/* ✅ Navbar (Fixed at Bottom) */}
      <div className=" w-full border-t border-neon-green bg-black">
        <Navigation />
      </div>
    </div>
  );
}
