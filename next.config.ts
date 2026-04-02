import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const withMDX = createMDX({})

const nextConfig: NextConfig = {
  reactStrictMode: false,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
}

export default withMDX(nextConfig)
