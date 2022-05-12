/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  redirects() {
    return [
      process.env.MAINTENANCE_MODE === "true"
        ? { source: "/((?!maintenance).*)", destination: "/maintenance", permanent: false }
        : null,
    ].filter(Boolean);
  }
};