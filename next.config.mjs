/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  // reactStrictMode: true,
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
    localeDetection: false,
  },
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
