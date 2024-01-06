import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* CASE STUDIES SLUGS (URLS) */
export const getAllCaseStudiesSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				caseStudiesSlugs: caseStudies(where: {status: PUBLISH}, last: 100) {
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

		return response?.data?.caseStudiesSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the case studies slugs"
		);
	}
};

// All Case Studies Content
export const getAllCaseStudiesContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				caseStudiesContent: caseStudies(
					where: {status: PUBLISH, orderby: {field: DATE, order: ASC}}
					first: 100
				) {
					edges {
						node {
							slug
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

		return response?.data?.caseStudiesContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the case studies content"
		);
	}
};
