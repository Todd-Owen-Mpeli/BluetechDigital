"use client";

// Imports
import {createContext, useContext} from "react";
import {IPostTypes, IPageContext, IFlexibleContentType} from "@/types/context";

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
export const errorPage: string = "error-page";
export const flexibleContentType: IFlexibleContentType = {
	// Public pages
	pages: "DefaultTemplate_Flexiblecontent_FlexibleContent",
	// Preview pages
	previewPage: "Page_Flexiblecontent_FlexibleContent",
	previewPost: "Post_Flexiblecontent_FlexibleContent",
};

export const PageContext = createContext<IPageContext | undefined>(undefined);

export const usePageContext = () => {
	const content = useContext(PageContext);

	if (content === undefined) {
		throw new Error(`useDynamicPageContext must be used to render content.`);
	}

	return content;
};
