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
    images: {
        domains: [
            'panglimamuhammad.me',
            'source.unsplash.com',
            'secure.gravatar.com',
        ], // Add your domain here
    },
};

module.exports = nextConfig;
