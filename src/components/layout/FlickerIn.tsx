"use client";

import { motion } from "framer-motion";

const FlickerIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0, 1, 0, 1], // Flickers in randomly
      }}
      transition={{
        duration: 1.5, // Slower flicker effect
        times: [0, 0.2, 0.4, 0.7, 0.9, 1],
        ease: "easeInOut",
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FlickerIn;
