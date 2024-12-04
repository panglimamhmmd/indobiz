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
        domains: [
            'panglimamuhammad.me',
            'source.unsplash.com',
            'secure.gravatar.com',
            'images.pexels.com',
        ], // Add your domain here
    },
};

module.exports = nextConfig;
