import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false, // Hide "building..." indicator
    buildActivityPosition: "bottom-right", // Optional: moves activity indicator
    appIsrStatus: false, // Hides ISR status (if applicable)
  },
};

export default nextConfig;
