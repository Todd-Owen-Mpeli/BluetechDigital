import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* TESTIMONIALS */
// Testimonials Content
export const getAllTestimonialsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				testimonialsContent: testimonials(where: {status: PUBLISH}, last: 10) {
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

		return response?.data?.testimonialsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch testimonials content"
		);
	}
};
