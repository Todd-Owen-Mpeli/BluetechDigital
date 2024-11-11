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
export type IThemesOptionsContent = {
	email: string;
	address: string;
	emailTwo: string;
	phoneNumber: string;
	phoneNumberTwo: string;
	copyrightText: string;
	facebookLink: {
		url: string;
		title: string;
		target: string;
	};
	twitterLink: {
		url: string;
		title: string;
		target: string;
	};
	linkedinLink: {
		url: string;
		title: string;
		target: string;
	};
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
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	errorPageContent: {
		title: string;
		paragraph: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};

/* CONTEXT PROVIDERS  */
export type IPostTypes = {
	pages: string;
	posts: string;
	previewPage: string;
	previewPost: string;
	caseStudies: string;
	testimonials: string;
};

/* PAGE: Project Types, Content 
& Content Provider Interface */
export namespace IPage {
	export type ITypes = {
		home: string;
		services: string;
	};
	export type IContext = {
		content: IContent;
		postTypeFlexibleContent: string;
	};
	export type IContextProvider = {
		content: IContent;
		children: React.ReactNode;
		postTypeFlexibleContent: string;
	};
}

// WEBSITE NEWS AND CASE STUDIES TYPES
export namespace INewsCaseStudies {
	export type INewsInsights = {
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
	}[];

	export interface ICaseStudies extends INewsInsights {}
}

// WEBSITE LINKS AND SUBLINKS TYPES
export namespace ILinks {
	export type INavbarMenuLinks = {
		node: {
			id: string;
			url: string;
			label: string;
		};
	}[];

	export interface IMobileLinks extends INavbarMenuLinks {}
	export interface ICareerSublinks extends INavbarMenuLinks {}
	export interface ICopyrightLinks extends INavbarMenuLinks {}
	export interface IFooterMenuLinks extends INavbarMenuLinks {}
	export interface IOurServicesLinks extends INavbarMenuLinks {}
}

/* CONTEXT PROVIDERS  */
export type IPageContext = {
	content: IContent;
	postTypeFlexibleContent: string;
};
export type IGlobalProps = {
	testimonials: ITestimonials;
	themesOptionsContent: IThemesOptionsContent;

	// Website Links
	mobileLinks: ILinks.IMobileLinks;
	copyrightLinks: ILinks.ICopyrightLinks;
	navbarMenuLinks: ILinks.INavbarMenuLinks;
	footerMenuLinks: ILinks.IFooterMenuLinks;
	ourServicesLinks: ILinks.IOurServicesLinks;

	// News & Case Studies
	caseStudies: INewsCaseStudies.ICaseStudies;
	newsInsights: INewsCaseStudies.INewsInsights;
	newsInsightsThreeCards: INewsCaseStudies.INewsInsights;
};
export type IGlobalContext = {
	testimonials: ITestimonials;
	themesOptionsContent: IThemesOptionsContent;

	// Website Links
	mobileLinks: ILinks.IMobileLinks;
	copyrightLinks: ILinks.ICopyrightLinks;
	navbarMenuLinks: ILinks.INavbarMenuLinks;
	footerMenuLinks: ILinks.IFooterMenuLinks;
	ourServicesLinks: ILinks.IOurServicesLinks;

	// News & Case Studies
	caseStudies: INewsCaseStudies.ICaseStudies;
	newsInsights: INewsCaseStudies.INewsInsights;
	newsInsightsThreeCards: INewsCaseStudies.INewsInsights;
};
export type IPageContextProvider = {
	content: IContent;
	children: React.ReactNode;
	postTypeFlexibleContent: string;
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
export type IApolloContextProvider = {
	children: React.ReactNode;
};

type SlugResponse = {
	slug: string;
	modified: string;
};

export interface ISlug extends Array<SlugResponse> {}
