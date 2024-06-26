/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'portfolio-dev-strapi.hlts.duckdns.org',
        }],
    }
}

module.exports = nextConfig
