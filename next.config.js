/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"cmsbluetechdigital.co.uk",
			"cmsbluetechdigital.local",
			"lh3.googleusercontent.com",
		],
	},
};

module.exports = nextConfig;
