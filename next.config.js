/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: { 
    unoptimized: true, 
    remotePatterns:[{
    hostname:'cdn.sanity.io'
    }]
   },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }]
    });
    return config;
  }
};

module.exports = nextConfig;
