// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";
import {ICustomPostTypes} from "@/types/context";

/* TESTIMONIALS */
// Testimonials Content
export const getAllTestimonialsContent =
	async (): Promise<ICustomPostTypes.ITestimonials> => {
		try {
			const content: DocumentNode = gql`
				{
					testimonialsContent: testimonials(
						where: {status: PUBLISH}
						last: 100
					) {
						edges {
							node {
								testimonialReview {
									name
									jobTitle
									paragraph
									starRating
									image {
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
