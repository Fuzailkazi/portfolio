import type { NextConfig } from "next";

// No `output: "export"` — the /api/chat route handler needs a server runtime
// (deployed as a serverless function on Vercel).
const nextConfig: NextConfig = {};

export default nextConfig;
