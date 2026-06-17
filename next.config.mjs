/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    
    ]
  },
  allowedDevOrigins: ['192.168.1.201'],

};

export default nextConfig;
