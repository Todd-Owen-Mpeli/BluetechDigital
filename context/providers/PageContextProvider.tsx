"use client";

// Imports
import {FC} from "react";
import {IPageContext} from "@/types/context";
import {createContext, useContext} from "react";
import {IPageContextProvider} from "@/types/context";

export const PageContext = createContext<IPageContext | undefined>(undefined);

export const usePageContext = () => {
	const content = useContext(PageContext);

	if (content === undefined) {
		throw new Error(`useDynamicPageContext must be used to render content.`);
	}

	return content;
};

export const PageContextProvider: FC<IPageContextProvider> = ({
	content,
	children,
	postTypeFlexibleContent,
}) => {
	return (
		<PageContext.Provider
			value={{
				content: content,
				postTypeFlexibleContent: postTypeFlexibleContent,
			}}
		>
			{children}
		</PageContext.Provider>
	);
};

export default PageContextProvider;
