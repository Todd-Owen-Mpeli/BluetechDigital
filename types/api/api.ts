/* GOOGLE REVIEWS */
/* Fetch all Google Reviews from google */
export type IReviewsRating = {
	rating: number;
};
export type IReviewsArray = [
	{
		author_name: string;
		author_url: string;
		language: string;
		original_language: string;
		profile_photo_url: string;
		rating: number;
		relative_time_description: string;
		text: string;
		time: number;
		translated: false;
	}
];
