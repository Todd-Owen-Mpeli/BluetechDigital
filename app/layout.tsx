// Imports
import type {AppProps} from "next/app";
import {IGlobal} from "@/types/context";

// Global Styling
import "@/styles/globals.scss";

// Queries Functions
import {
	getMobileLinks,
	getCopyrightLinks,
	getFooterMenuLinks,
	getNavbarMenuLinks,
	getOurServicesSublinks,
} from "@/graphql/GetAllMenuLinks";
import {
	getAllNewsInsightsContent,
	getThreeNewsInsightsContent,
} from "@/graphql/GetAllNewsInsights";
import {getThemesOptionsContent} from "@/graphql/GetAllThemesOptions";
import {getAllCaseStudiesContent} from "@/graphql/GetAllCaseStudies";
import {getAllTestimonialsContent} from "@/graphql/GetAllTestimonials";

// Components
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import SmoothScrolling from "@/components/Global/SmoothScrolling";
import GlobalContextProvider from "@/context/providers/GlobalContextProvider";
import ApolloContextProvider from "@/context/providers/ApolloContextProvider";

const App = async ({children}: AppProps | any) => {
	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const promises: Promise<any>[] = [
		// Website Links
		getMobileLinks(),
		getCopyrightLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getOurServicesSublinks(),

		// Custom Post Types
		getThemesOptionsContent(),
		getAllCaseStudiesContent(),
		getAllNewsInsightsContent(),
		getThreeNewsInsightsContent(),
		getAllTestimonialsContent(),
	];

	const [
		// Website Links
		mobileLinks,
		copyrightLinks,
		navbarMenuLinks,
		footerMenuLinks,
		ourServicesLinks,

		// Custom Post Types
		themesOptionsContent,
		caseStudies,
		newsInsights,
		newsInsightsThreeCards,
		testimonials,
	] = await Promise.all(promises);

	const globalProps: IGlobal.IProps = {
		mobileLinks: mobileLinks,
		caseStudies: caseStudies,
		testimonials: testimonials,
		newsInsights: newsInsights,
		copyrightLinks: copyrightLinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		ourServicesLinks: ourServicesLinks,
		themesOptionsContent: themesOptionsContent,
		newsInsightsThreeCards: newsInsightsThreeCards,
	};

	return (
		<html lang="en">
			<body>
				<ApolloContextProvider>
					<GlobalContextProvider globalProps={globalProps}>
						<SmoothScrolling>
							<Navbar />
							{children}
							<Footer />
						</SmoothScrolling>
					</GlobalContextProvider>
				</ApolloContextProvider>
			</body>
		</html>
	);
};

export default App;
