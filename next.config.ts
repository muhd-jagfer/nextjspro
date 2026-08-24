import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true, // build time tool that automatically optimize the code 
  // (no need to use hooks (memoisation and use callback) it is automized)
};

export default nextConfig;
