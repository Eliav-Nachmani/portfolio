import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // ✅ Helps catch potential React issues
  compiler: {
    styledComponents: true, // ✅ Enable better styled-components performance (if used)
  },
};

export default nextConfig;
