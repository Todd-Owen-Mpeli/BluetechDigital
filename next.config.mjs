/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: `${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME}`,
				port: "",
				pathname: `${process.env.IMAGE_REMOTE_PATHNAME}`,
			},
		],
	},
};

export default nextConfig;
