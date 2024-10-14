/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // publicRuntimeConfig: {
  //   BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  // },
  env: {
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
