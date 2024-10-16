/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/admin",
                destination: "/admin/index.html",
            },
        ];
    },
    images: {
        remotePatterns: [{ protocol: 'http', hostname: 'assets.tina.io' }],
    },
};

export default nextConfig;
