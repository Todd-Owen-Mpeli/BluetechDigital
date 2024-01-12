// Imports
import Head from "next/head";
import {usePageContext} from "@/context/pages";

const MetaTag = () => {
	const pageContext = usePageContext();

	return (
		<Head>
			{/* <!-- Website Title --> */}
			<title key="title">{`${pageContext?.seo?.title} | Official Website`}</title>
			<meta name="description" content={pageContext?.seo?.metaDesc} />
			<link rel="icon" href="/svg/logo/BluetechDigital-Logo-color.svg" />
			<meta
				name="robots"
				content={`${pageContext?.seo?.metaRobotsNoindex} , ${pageContext?.seo?.metaRobotsNofollow}`}
				key="metaRobots"
			/>
			<link
				rel="canonical"
				href={pageContext?.seo?.canonical}
				key="metaCanonical"
			/>

			{/* OpenGraph */}
			<meta
				property="og:title"
				content={pageContext?.seo?.opengraphTitle}
				key="ogTitle"
			/>
			<meta
				name="og:url"
				content={pageContext?.seo?.opengraphUrl}
				key="ogUrl"
			/>
			<meta
				name="og:image"
				content={pageContext?.seo?.opengraphImage?.mediaItemUrl}
				key="ogImage"
			/>
			<meta
				name="image"
				property="og:image"
				content={pageContext?.seo?.opengraphImage?.mediaItemUrl}
				key="ogLinkedInImage"
			/>
			<meta
				name="og:description"
				content={pageContext?.seo?.opengraphDescription}
				key="ogDesc"
			/>

			{/* Twitter */}
			<meta
				name="twitter:title"
				content={pageContext?.seo?.twitterTitle}
				key="twitterTitle"
			/>
			<meta
				name="twitter:description"
				content={pageContext?.seo?.twitterDescription}
				key="twitterDesc"
			/>
			<meta
				name="twitter:image"
				content={pageContext?.seo?.twitterImage?.mediaItemUrl}
				key="twitterImage"
			/>
			<meta
				name="twitter:card"
				content="summary_large_image"
				key="twitterCard"
			/>
		</Head>
	);
};

export default MetaTag;
