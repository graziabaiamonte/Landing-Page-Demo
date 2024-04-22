/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   */
  basePath: "/Landing-page-demo",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
