// Components
export type ICTA = {
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
			height: number;
			width: number;
		};
	};
};
export type IFAQ = {
	title: string;
	subtitle: string;
	paragraph: string;
	faqGrid: [
		{
			card: {
				title: string;
				paragraph: string;
			};
		}
	];
};
export type IHero = {
	video: string;
	titleEnd: string;
	paragraph: string;
	titleStart: string;
	titleMiddle: string;
	displayVideo: boolean;
	videoBackgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	rightsideImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	smallImageOne: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	smallImageTwo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IFAQTwo = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	faqGrid: [
		{
			card: {
				title: string;
				paragraph: string;
			};
		}
	];
};
export type ICTATwo = {
	title: string;
	highlightText: string;
	backgroundColor: string;
	highlightTextColor: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IHeroTwo = {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: string;
};
export type IGallery = {
	title: string;
	highlightText: string;
	paragraph: string;
	gallery: [
		{
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		}
	];
};
export type IVideoBlock = {
	title: string;
	video: string;
	subtitle: string;
	paragraph: string;
	displayVideo: boolean;
	highlightText: string;
	displayYoutubeIcon: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	videoBackgroundImage: {
		sourceUrl: string;
	};
};
export type ILinkedInCta = {
	title: string;
	highlightText: string;
	backgroundColor: string;
	highlightTextColor: string;
	displayLinkedinIcon: Boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IContactForm = {
	title: string;
	formTitle: string;
	paragraph: string;
};
export type IContactInfo = {
	title: string;
	paragraph: string;
};
export type IOurPartners = {
	title: string;
	subtitle: string;
	paragraph: string;
	imageGrid: [
		{
			link: {
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
		}
	];
};
export type IMaintenance = {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IOurServices = {
	title: string;
	subtitle: string;
	paragraph: string;
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
	servicesGrid: [
		{
			card: {
				title: string;
				subtitle: string;
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
		}
	];
};
export type IServicesGrid = {
	servicesGrid: [
		{
			card: {
				title: string;
				subtitle: string;
				paragraph: string;
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
				bulletPoints: [
					{
						text: string;
					}
				];
			};
		}
	];
};
export type IFeaturesGrid = {
	cardOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	cardTwo: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
	cardThree: {
		foreground: {
			title: string;
			subtitle: string;
			paragraph: string;
		};
		background: {
			title: string;
			subtitle: string;
			paragraph: string;
		};
	};
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
				backgroundColor: string;
			};
		}
	];
	lastCard: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
};
export type INewsInsights = {
	title: string;
	italic: string;
	paragraph: string;
};
export type IBenefitsStats = {
	title: string;
	subtitle: string;
	paragraph: string;
	benefitsGrid: [
		{
			text: string;
		}
	];
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
	displayParagraph: boolean;
};
export type ICaseStudiesGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
};
export type IFeaturesGridTwo = {
	cardOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	cardTwo: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
				backgroundColor: string;
			};
		}
	];
	lastCard: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
};
export type ITestimonialsTwo = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type ITestimonialsGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
};
export type IJumboContentImage = {
	title: string;
	subtitle: string;
	paragraph: string;
	contentBox: {
		text: string;
		subtext: string;
		icon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	quality: {
		title: string;
		paragraph: string;
	};
	reliability: {
		title: string;
		paragraph: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	bottomContent: {
		text: string;
		textTwo: string;
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
		displayTextarea: string;
		displayButtonOrImage: string;
	};
};
export type ITitleContentImage = {
	title: string;
	subtitle: string;
	paragraph: string;
	imageLocation: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IJumboContentSection = {
	jumboContentSection: [
		{
			content: {
				title: string;
				subtitle: string;
				paragraph: string;
				imageLocation: string;
				backgroundDisplay: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
				smallImage: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
			};
		}
	];
};
export type IAchievementsStatsCTA = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	displayAchievementsContent: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	achievements: [
		{
			card: {
				title: string;
				paragraph: string;
				icon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
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
		}
	];
};
export type ITwoColumnButtonContent = {
	title: string;
	subtitle: string;
	paragraph: string;
	backgroundColor: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	columnTwoContent: {
		buttonText: string;
		buttonTextTwo: string;
		buttonTextThree: string;
		paragraph: string;
		paragraphTwo: string;
		paragraphThree: string;
	};
};

// Global
export type ILayout = {
	children: React.ReactNode;
};
export type IErrorPage = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IPagination = {
	contentArray: any;
	contentType: string;
	tailwindStyling: string;
	numberOfItemsRenderedPerPage: number;
};

// Cards
export type IFAQCard = {
	index: number;
	title: string;
	paragraph: string;
};
export type IBlogsCard = {
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
export type ICaseStudiesCard = {
	slug: string;
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
export type IFeaturesGridCard = {
	title: string;
	subtitle: string;
	paragraph: string;
	backgroundColor: string;
};
export type ITestimonialsCard = {
	name: string;
	position: string;
	paragraph: string;
	starRating: number;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type INewsInsightsCard = {
	uri: string;
	date: string;
	title: string;
	paragraph: string;
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
export type ITestimonialsTwoCard = {
	name: string;
	jobTitle: string;
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
export type IValuesBlocksTextCard = {
	title: string;
	paragraph: string;
	displayButton: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IValuesBlocksImageCard = {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IFeaturesGridImageCard = {
	backgroundImage: string;
};
export type IJumboContentSectionCard = {
	title: string;
	subtitle: string;
	paragraph: string;
	imageLocation: string;
	backgroundDisplay: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	smallImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IValuesBlocksImageOrMapCard = {
	googleMap: string;
	displayImageOrMap: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};

// Elements
export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type ISideMenu = {
	menuActive: boolean;
	setMenuActive: any;
};
export type IParagraph = {
	content: string;
	tailwindStyling: string;
};
export type IRenderStars = {
	starRating: number;
};
export type IVideoWrapper = {
	children: React.ReactNode;
};
export type IVideoHeroWrapper = {
	children: React.ReactNode;
};
export type IBackHoverButton = {
	link: string;
};
export type IButtonBorderSliced = {
	title: string;
	fullWidth: boolean;
	tailwindColor: string;
};
export type IDownloadButtonLinks = {
	title: string;
	pdfLink: boolean;
};
export type IYoutubeButtonBorderSliced = {
	title: string;
	fullWidth: boolean;
	displayYoutubeIcon: boolean;
};
