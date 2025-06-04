// Imports
import {NextPage, Metadata} from "next";
import {pageType, postType, flexibleContentType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/graphql/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/graphql/GetAllFlexibleContentComponents";

// Components
import PageContextProvider from "@/context/providers/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

// Home Page Generated Metadata
export async function generateMetadata(): Promise<Metadata> {
	const seo: any = await getAllSeoContent(pageType?.home, postType?.pages);

	return {
		title: seo?.title,
		description: seo?.metaDesc,
		openGraph: {
			type: 'website',
			url: seo?.opengraphUrl,
			title: seo?.opengraphTitle,
			siteName: seo?.opengraphSiteName,
			description: seo?.opengraphDescription
		},
		alternates: {
			canonical: seo?.canonical,
		},
	};
}

const HomePage: NextPage = async () => {
	// Fetch priority content
	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		pageType?.home,
		postType?.pages,
		flexibleContentType?.pages
	);

	return (
		<PageContextProvider
			content={flexibleContentComponents?.content}
			postTypeFlexibleContent={flexibleContentType?.pages}
		>
			<RenderFlexibleContent />
		</PageContextProvider>
	);
};

export default HomePage;
