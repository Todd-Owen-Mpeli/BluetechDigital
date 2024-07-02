import {MetadataRoute} from "next";

const robots = async () => {
	const siteUrl: any = process.env.SITE_URL;

	const metaRobots: MetadataRoute.Robots = {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/private/",
		},
		sitemap: `${siteUrl}/sitemap.xml`,
	};
	return metaRobots;
};

export default robots;
