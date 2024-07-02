// Imports
import {MetadataRoute} from "next";
import {getAllPagesSlugs} from "@/graphql/GetAllPagesSlugs";
import {getAllNewsInsightsPostsSlugs} from "@/graphql/GetAllNewsInsights";

const sitemap = async () => {
	const [pagesSlugs, newsInsightsPostsSlugs] = await Promise.all([
		getAllPagesSlugs(),
		getAllNewsInsightsPostsSlugs(),
	]);

	const siteUrl: any = process.env.SITE_URL;

	/* Pages, News Insights Posts Arrays */
	const pagesLinks: any = [];
	const newsInsightsPostsLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// News Insights Dynamic Links
	newsInsightsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/operational-insights/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		newsInsightsPostsLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: MetadataRoute.Sitemap = [
		...pagesLinks,
		...newsInsightsPostsLinks,
	];

	return allLinks;
};

export default sitemap;
