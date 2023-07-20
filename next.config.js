/** @type {import('next').NextConfig} */

// TODO: next-auth does not work with output: 'export'...
// Which means we can't use next export to generate a static mobile build
// We may need to use a different auth library or find a workaround
const nextConfig = {
  distDir: "out",
};

module.exports = nextConfig;
