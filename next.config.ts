import type { NextConfig } from "next";
import { withGTConfig } from 'gt-next/config';

const nextConfig: NextConfig = {
  /* config options here */
};

export default withGTConfig(nextConfig, {
  projectId: process.env.GT_PROJECT_ID,
  apiKey: process.env.GT_API_KEY,
  debug: true, // Enable verbose logging
  noCache: true // Disable caching during development
});