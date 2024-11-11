"use client";

// Imports
import {FC} from "react";
import {IPage} from "@/types/context";
import {createContext, useContext} from "react";

export const PageContext = createContext<IPage.IContext | undefined>(undefined);

export const usePageContext = () => {
	const content = useContext(PageContext);

	if (content === undefined) {
		throw new Error(`useDynamicPageContext must be used to render content.`);
	}

	return content;
};

export const PageContextProvider: FC<IPage.IContextProvider> = ({
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
