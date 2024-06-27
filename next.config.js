/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'portfolio-dev-strapi.hlts.duckdns.org',
            },
            {
                protocol: 'https',
                hostname: 'portfolio-strapi-dev.tslab.live'
            }

        ],
    }
}

module.exports = nextConfig
