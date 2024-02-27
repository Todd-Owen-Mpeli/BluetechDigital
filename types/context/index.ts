export type ISeo = {
	canonical: string;
	cornerstone: Boolean;
	focuskw: string;
	fullHead: string;
	metaDesc: string;
	metaKeywords: string;
	metaRobotsNofollow: string;
	metaRobotsNoindex: string;
	opengraphAuthor: string;
	opengraphDescription: string;
	opengraphImage: {
		mediaItemUrl: string;
	};
	opengraphModifiedTime: string;
	opengraphPublishedTime: string;
	opengraphPublisher: string;
	opengraphSiteName: string;
	opengraphTitle: string;
	opengraphType: string;
	opengraphUrl: string;
	readingTime: number;
	title: string;
	twitterDescription: string;
	twitterTitle: string;
	twitterImage: {
		mediaItemUrl: string;
	};
};
export type IContent = [
	{
		content: any;
	}
];
export type IPostTypes = {
	pages: string;
	posts: string;
	previewPage: string;
	previewPost: string;
	caseStudies: string;
	testimonials: string;
};
export type IMobileLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type ICaseStudies = [
	{
		node: {
			id: string;
			uri: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type ITestimonials = [
	{
		node: {
			testimonialReview: {
				name: string;
				jobTitle: string;
				starRating: number;
				paragraph: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type INewsInsights = [
	{
		node: {
			id: string;
			uri: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type ICopyrightLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IFooterMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type INavbarMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IOurServicesLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IThemesOptionsContent = {
	email: string;
	address: string;
	emailTwo: string;
	phoneNumber: string;
	phoneNumberTwo: string;
	copyrightText: string;
	facebookLink: string;
	twitterLink: string;
	linkedinLink: string;
	textarea: string;
	awardsCertificationsGallery: [
		{
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		}
	];
	displayNoticeBanner: boolean;
	noticeBannerTextarea: string;
	menuColumnTwo: {
		title: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	menuColumnThree: {
		title: string;
		paragraph: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			sourceUrl: string;
		};
	};
};

/* CONTEXT PROVIDERS  */
export type IPageContext = {
	seo: ISeo;
	content: IContent;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
};
export type IGlobalProps = {
	mobileLinks: IMobileLinks;
	testimonials: ITestimonials;
	newsInsights: INewsInsights;
	copyrightLinks: ICopyrightLinks;
	// caseStudiesContent: ICaseStudies;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	ourServicesLinks: IOurServicesLinks;
	newsInsightsThreeCards: INewsInsights;
	themesOptionsContent: IThemesOptionsContent;
};
export type IGlobalContext = {
	mobileLinks: IMobileLinks;
	testimonials: ITestimonials;
	newsInsights: INewsInsights;
	copyrightLinks: ICopyrightLinks;
	// caseStudiesContent: ICaseStudies;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	ourServicesLinks: IOurServicesLinks;
	newsInsightsThreeCards: INewsInsights;
	themesOptionsContent: IThemesOptionsContent;
};
export type IPageContextProvider = {
	seo: ISeo;
	content: IContent;
	children: React.ReactNode;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
};
export type IFlexibleContentType = {
	pages: string;
	previewPage: string;
	previewPost: string;
};
export type IGlobalContextProvider = {
	globalProps: IGlobalContext;
	children: React.ReactNode;
};
export type IPostTypeFlexibleContent = {
	postTypeFlexibleContent: string;
};
