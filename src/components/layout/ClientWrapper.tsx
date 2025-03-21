"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "@/components/layout/Navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showNoise, setShowNoise] = useState(false);
  const [currentPage, setCurrentPage] = useState(children);

  useEffect(() => {
    setShowNoise(true); // Show noise effect

    // Delay rendering the new page until after the noise effect disappears
    const timer = setTimeout(() => {
      setCurrentPage(children); // Only update page content AFTER noise effect is done
      setShowNoise(false); // Hide noise effect
    }, 300); // Matches noise effect duration

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Static Noise Effect (Covers Screen for 0.3s) */}
      {showNoise && (
        <div className="absolute inset-0 w-full h-screen static-noise-effect z-50 pointer-events-none"></div>
      )}

      {/* ✅ Main Content - Scrolls only if needed */}
      <div className="flex-1 h-[85vh] smaller:h-[75vh] overflow-hidden">
        <div className="h-full overflow-y-auto">{currentPage}</div>
      </div>

      {/* ✅ Fixed Navbar at the Bottom */}
      <div className="h-[15vh] smaller:h-[25vh] flex items-center justify-center border-t border-neon-green z-50 fixed bottom-0 left-0 w-full bg-black">
        <Navigation />
      </div>
    </div>
  );
}
