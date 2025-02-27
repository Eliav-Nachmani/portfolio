"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // ✅ Now it's allowed inside a client component

  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
