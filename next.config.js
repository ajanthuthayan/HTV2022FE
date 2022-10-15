/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["f1.media.brightcove.com"],
	},
};

module.exports = nextConfig;
