/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @use "~styles/colors" as *;
      @use "~styles/functions" as *;
      @use "~styles/media" as *;
    `,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
