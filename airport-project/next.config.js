/*@type {import('next').NextConfig} */
module.exports = {
    async headers() {
        return [
            {
                // matching all API routes
                source: "src/app/api/minicards/route.ts",
                headers: [
                    { key: "Access-Control-Allow-Private-Network", value: "true" },
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "https://airport-next-new.vercel.app" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
}