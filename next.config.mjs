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
  allowedDevOrigins: ['192.168.1.203'],

};

export default nextConfig;
