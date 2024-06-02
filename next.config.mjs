/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir:true,
    },
    env:{
        DB_URI: "mongodb://localbost:27017/meldr_assign"
    }
};

export default nextConfig;
