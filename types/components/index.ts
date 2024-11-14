import {Dispatch, SetStateAction} from "react";
import {ILinks} from "../context";

// Components
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
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
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
export type IAchievementsStatsCTA = {
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
export namespace ICTA {
	export type IProps = {
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
}
export namespace IFAQ {
	export type IProps = {
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
	export type ICard = {
		title: string;
		paragraph: string;
	};
}
export namespace IHero {
	export type IProps = {
		video: string;
		titleEnd: string;
		paragraph: string;
		titleStart: string;
		titleMiddle: string;
		displayVideo: boolean;
		videoBackgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
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
	export type IHeroTwo = {
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
	export type IVideoWrapper = {
		children: React.ReactNode;
	};
}
export namespace IContact {
	export type IProps = {
		title: string;
		formTitle: string;
		paragraph: string;
	};

	export type IForm = {
		formTitle: string;
	};
	export type IInfo = {
		title: string;
		paragraph: string;
	};
}
export namespace ICaseStudies {
	export type IProps = {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	export type ICard = {
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
}
export namespace INewsInsights {
	export type IProps = {
		title: string;
		italic: string;
		paragraph: string;
	};
	export type ICard = {
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
	export type IThreeCards = {
		title: string;
		italic: string;
		paragraph: string;
	};
}
export namespace IFeaturesGrid {
	export type IProps = {
		cardOne: {
			title: string;
			subtitle: string;
			paragraph: string;
		};
		cardTwo: {
			backgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
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
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		};
	};
	export type IFeaturesGridTwo = {
		cardOne: {
			title: string;
			subtitle: string;
			paragraph: string;
		};
		cardTwo: {
			backgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
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
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		};
	};
	export type ICard = {
		title: string;
		subtitle: string;
		paragraph: string;
		backgroundColor: string;
	};
	export type IImageCard = {
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
}
export namespace ITestimonials {
	export type IProps = {
		title: string;
		subtitle: string;
		paragraph: string;
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
	export type ICard = {
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
	export type ITwoCard = {
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
}
export namespace IJumboContentSection {
	export type IProps = {
		jumboContentSection: {
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
		}[];
	};
	export type ICard = {
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

// Global
export namespace IPagination {
	export type IProps = {
		contentArray: any;
		className: string;
		contentType: string;
		numberOfItemsRenderedPerPage: number;
	};
	export type ICard = {
		item: any;
		index: number;
		itemsPerPage: number;
		contentType: IProps[`contentType`];
	};
	export type IPaginationCard = {
		totalPages: any;
		currentPage: any;
		buttonClipPath: string;
		contentArray: IProps[`contentArray`];
		setCurrentPage: Dispatch<SetStateAction<number>>;
	};
}

export type ISmoothScrolling = {
	children: React.ReactNode;
};

// Cards
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

// Elements
export namespace IElements {
	export type ITitle = {
		content: string;
		className: string;
	};
	export namespace ISideMenu {
		export type IProps = {
			menuActive: boolean;
			setMenuActive: any;
		};
		export type IMobileLinksCard = {
			item: any;
			toggleMenu: () => void;
			ourServicesSublinksOpen: any;
			newsInsightsSublinksOpen: any;
			displayOurServicesSublinks: () => void;
			displayNewsInsightsSublinks: () => void;
			ourServicesLinks: ILinks.IOurServicesLinks;
		};
	}
	export type IParagraph = {
		content: string;
		className: string;
	};
	export type IRenderStars = {
		starRating: number;
	};
	export type IVideoWrapper = {
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
}
