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
        remotePatterns: [{ protocol: 'https', hostname: 'assets.tina.io' }],
        unoptimized: true
    },
};

export default nextConfig;
