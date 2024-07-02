// Imports
import {IPostTypes, IFlexibleContentType} from "@/types/context";

/* PUBLIC PAGES & POSTS */
/* PREVIEW PAGES & POSTS */
export const postType: IPostTypes = {
	// Public pages
	pages: "pages",
	posts: "posts",
	caseStudies: "caseStudies",
	testimonials: "testimonials",

	// Preview pages
	previewPage: "page",
	previewPost: "post",
};
export const homePage: string = "Home";
export const flexibleContentType: IFlexibleContentType = {
	// Public pages
	pages: "DefaultTemplate_Flexiblecontent_FlexibleContent",
	// Preview pages
	previewPage: "Page_Flexiblecontent_FlexibleContent",
	previewPost: "Post_Flexiblecontent_FlexibleContent",
};
