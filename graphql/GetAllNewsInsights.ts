// Imports
import {client} from "@/config/apollo";
import {INewsCaseStudies, ISlug} from "@/types/context";
import {DocumentNode, gql} from "@apollo/client";

/* NEWS & INSIGHTS SLUGS (URLS) */
export const getAllNewsInsightsPostsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				newsInsightsSlugs: posts(where: {status: PUBLISH}, last: 100) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.newsInsightsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the news insight slugs"
		);
	}
};

// All News & Insights Content
export const getAllNewsInsightsContent =
	async (): Promise<INewsCaseStudies.INewsInsights> => {
		try {
			const content: DocumentNode = gql`
				{
					newsInsightsContent: posts(where: {status: PUBLISH}, last: 100) {
						edges {
							node {
								id
								uri
								date
								excerpt
								title(format: RENDERED)
								featuredImage {
									node {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.newsInsightsContent?.edges;
		} catch (error) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch all the news insight posts"
			);
		}
	};

// Latest Three News & Insights Content
export const getThreeNewsInsightsContent =
	async (): Promise<INewsCaseStudies.INewsInsights> => {
		try {
			const content: DocumentNode = gql`
				{
					newsInsightsContent: posts(where: {status: PUBLISH}, first: 3) {
						edges {
							node {
								id
								uri
								date
								excerpt
								title(format: RENDERED)
								featuredImage {
									node {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.newsInsightsContent?.edges;
		} catch (error) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch all the news insight posts"
			);
		}
	};
