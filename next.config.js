/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true, // Use `true` for a 301 redirect, `false` for a 302 redirect
            },
        ];
    },
    env: {
        GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'panglimamuhammad.me',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'secure.gravatar.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'demo.wpgraphql.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                pathname: '**',
            },
        ], // Add your domain here
    },
};

module.exports = nextConfig;
