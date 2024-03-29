// Imports
import {FC} from "react";
import {GlobalContext} from "@/context/global";
import {IGlobalContextProvider} from "@/types/context";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<GlobalContext.Provider
			value={{
				mobileLinks: globalProps?.mobileLinks,
				caseStudies: globalProps?.caseStudies,
				testimonials: globalProps?.testimonials,
				newsInsights: globalProps?.newsInsights,
				copyrightLinks: globalProps?.copyrightLinks,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				footerMenuLinks: globalProps?.footerMenuLinks,
				ourServicesLinks: globalProps?.ourServicesLinks,
				themesOptionsContent: globalProps?.themesOptionsContent,
				newsInsightsThreeCards: globalProps?.newsInsightsThreeCards,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
