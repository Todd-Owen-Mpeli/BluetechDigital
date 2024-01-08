"use Client";

// Imports
import {FC} from "react";
import {usePageContext} from "@/context/pages";

// Components
import CTA from "../CTA";
import FAQ from "../FAQ";
import Hero from "../Hero";
import CTATwo from "../CTATwo";
import HeroTwo from "../HeroTwo";
import Gallery from "../Gallery";
import VideoBlock from "../VideoBlock";
import LinkedInCta from "../LinkedInCta";
import ContactInfo from "../ContactInfo";
import OurPartners from "../OurPartners";
import OurServices from "../OurServices";
import Maintenance from "../Maintenance";
import NewsInsights from "../NewsInsights";
import ErrorPage from "../Global/ErrorPage";
import TitleParagraph from "../TitleParagraph";
import TitleContentImage from "../TitleContentImage";
import JumboContentImage from "../JumboContentImage";
import JumboContentSection from "../JumboContentSection";
import FeaturesGridContent from "../FeaturesGridContent";
import AchievementsStatsCTA from "../AchievementsStatsCTA";
import TwoColumnButtonContent from "../TwoColumnButtonContent";
import NewsInsightsThreeCards from "../NewsInsightsThreeCards";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent = content?.postTypeFlexibleContent;

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, keys: any) => (
					<section key={keys}>
						{item?.fieldGroupName === `${FlexibleContent}_Hero` ? (
							<>
								<Hero
									video={item?.video}
									titleEnd={item?.titleEnd}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									titleStart={item?.titleStart}
									titleMiddle={item?.titleMiddle}
									displayVideo={item?.displayVideo}
									smallImageOne={item?.smallImageOne}
									smallImageTwo={item?.smallImageTwo}
									rightsideImage={item?.rightsideImage}
									videoBackgroundImage={item?.videoBackgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_HeroTwo` ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_FeaturesGrid` ? (
							<>
								<FeaturesGridContent
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
									cardThree={item?.cardThree}
									gridContent={item?.gridContent}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TwoColumnButtonContent` ? (
							<>
								<TwoColumnButtonContent
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundColor={item?.backgroundColor}
									columnTwoContent={item?.columnTwoContent}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurServices` ? (
							<>
								<OurServices
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									servicesGrid={item?.servicesGrid}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_JumboContentSection` ? (
							<>
								<JumboContentSection
									jumboContentSection={item?.contentSection}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_JumboContentImage` ? (
							<>
								<JumboContentImage
									title={item?.title}
									image={item?.image}
									quality={item?.quality}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									contentBox={item?.contentBox}
									reliability={item?.reliability}
									bottomContent={item?.bottomContent}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_AchievementsStatsCta` ? (
							<>
								<AchievementsStatsCTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									achievements={item?.achievements}
									backgroundImage={item?.backgroundImage?.sourceUrl}
									displayAchievementsContent={item?.displayAchievementsContent}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
									displayParagraph={item?.displayParagraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurPartners` ? (
							<>
								<OurPartners
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									imageGrid={item?.imageGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Faq` ? (
							<>
								<FAQ
									cta={item?.cta}
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									faqContent={item?.faqContent}
									displayCtaBlock={item?.displayCtaBlock}
									downloadLinksTitle={item?.downloadLinksTitle}
									downloadButtonLinks={item?.downloadButtonLinks}
									displayDownloadButtonLinks={item?.displayDownloadButtonLinks}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TitleContentImage` ? (
							<>
								<TitleContentImage
									title={item?.title}
									image={item?.image}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									imageLocation={item?.imageLocation}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_VideoBlock` ? (
							<>
								<VideoBlock
									title={item?.title}
									video={item?.video}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									displayVideo={item?.displayVideo}
									highlightText={item?.highlightText}
									displayYoutubeIcon={item?.displayYoutubeIcon}
									videoBackgroundImage={item?.videoBackgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Gallery` ? (
							<>
								<Gallery
									title={item?.title}
									gallery={item?.gallery}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_NewsInsightsGrid` ? (
							<>
								<NewsInsights
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_NewsInsightsThreeCards` ? (
							<>
								<NewsInsightsThreeCards
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Cta` ? (
							<>
								<CTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_CtaTwo` ? (
							<>
								<CTATwo
									title={item?.title}
									buttonLink={item?.buttonLink}
									highlightText={item?.highlightText}
									backgroundColor={item?.backgroundColor}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_LinkedinCta` ? (
							<>
								<LinkedInCta
									title={item?.title}
									buttonLink={item?.buttonLink}
									highlightText={item?.highlightText}
									backgroundColor={item?.backgroundColor}
									displayLinkedinIcon={item?.displayLinkedinIcon}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactInfo` ? (
							<>
								<ContactInfo title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Maintenance` ? (
							<>
								<Maintenance
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ErrorPageContent` ? (
							<>
								<ErrorPage
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : (
							<></>
						)}
					</section>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
