// Imports
import "@/styles/globals.scss";
import {motion} from "framer-motion";
import type {AppProps} from "next/app";
import {client} from "@/config/apollo";
import {ApolloProvider} from "@apollo/client";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";

// Styling
import "../styles/globals.scss";

// Global Context Provider
import {IGlobalProps} from "@/types/context";

// Queries Functions
import {
	getMobileLinks,
	getCopyrightLinks,
	getFooterMenuLinks,
	getNavbarMenuLinks,
	getOurServicesSublinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getAllCaseStudiesContent} from "@/functions/graphql/Queries/GetAllCaseStudies";
import {getAllTestimonialsContent} from "@/functions/graphql/Queries/GetAllTestimonials";
import {
	getAllNewsInsightsContent,
	getThreeNewsInsightsContent,
} from "@/functions/graphql/Queries/GetAllNewsInsights";

// Components
import PageLoadingSquares from "@/components/Global/PageLoadingSquares";
import GlobalContextProvider from "@/components/Context/GlobalContextProvider";
import PostHogContextProvider from "@/components/Context/PostHogProviderContext";

export default function App({
	Component,
	pageProps,
	globalProps,
}: AppProps | any) {
	return (
		<ApolloProvider client={client}>
			<GlobalContextProvider globalProps={globalProps}>
				<motion.div
					exit={{
						opacity: 0,
					}}
					initial="initial"
					animate="animate"
				>
					<PageLoadingSquares />
					{/* Cookie Policy Pop Up */}
					<PostHogContextProvider />
					<Component {...pageProps} />
					{/* Vercel Analytics */}
					<Analytics />
					{/* Vercel Speed Insights */}
					<SpeedInsights />
				</motion.div>
			</GlobalContextProvider>
		</ApolloProvider>
	);
}

App.getInitialProps = async ({Component, ctx}: any) => {
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const [
		mobileLinks,
		copyrightLinks,
		navbarMenuLinks,
		footerMenuLinks,
		ourServicesLinks,
		themesOptionsContent,
		newsInsights,
		newsInsightsThreeCards,
		testimonials,
	]: // caseStudiesContent,
	any = await Promise.all([
		getMobileLinks(),
		getCopyrightLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getOurServicesSublinks(),
		getThemesOptionsContent(),
		getAllNewsInsightsContent(),
		getThreeNewsInsightsContent(),
		getAllTestimonialsContent(),
		// getAllCaseStudiesContent(),
	]);

	const globalProps: IGlobalProps = {
		mobileLinks: mobileLinks,
		testimonials: testimonials,
		newsInsights: newsInsights,
		copyrightLinks: copyrightLinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		ourServicesLinks: ourServicesLinks,
		// caseStudiesContent: caseStudiesContent,
		themesOptionsContent: themesOptionsContent,
		newsInsightsThreeCards: newsInsightsThreeCards,
	};

	return {
		pageProps,
		globalProps,
	};
};
