// Imports
import {IPost, IFlexibleContentType, IPage} from "@/types/context";

/* PUBLIC PAGES & POSTS */
/* PREVIEW PAGES & POSTS */
export const postType: IPost.ITypes = {
	// Public pages
	pages: "pages",
	posts: "posts",
	caseStudies: "caseStudies",
	testimonials: "testimonials",

	// Preview pages
	previewPage: "page",
	previewPost: "post",
};

export const pageType: IPage.ITypes = {
	// Public pages
	home: "Home",
	services: "services",
};

export const flexibleContentType: IFlexibleContentType = {
	// Public pages
	pages: "DefaultTemplate_Flexiblecontent_FlexibleContent",
	// Preview pages
	previewPage: "Page_Flexiblecontent_FlexibleContent",
	previewPost: "Post_Flexiblecontent_FlexibleContent",
};
