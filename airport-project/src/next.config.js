/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                // matching all API routes
                source: "app/api/**/",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "s-maxage=1, stale-while-revalidate=59",
                    },
                ]
            }
        ]
    }
}

module.exports = nextConfig;