// Imports
import {FC} from "react";
import {usePageContext} from "@/context/pages";

// Components
import CTA from "../CTA";
import FAQ from "../FAQ";
import Hero from "../Hero";
import CTATwo from "../CTATwo";
import FAQTwo from "../FAQTwo";
import HeroTwo from "../HeroTwo";
import Gallery from "../Gallery";
import VideoBlock from "../VideoBlock";
import LinkedInCta from "../LinkedInCta";
import ContactInfo from "../ContactInfo";
import OurPartners from "../OurPartners";
import OurServices from "../OurServices";
import NewsInsights from "../NewsInsights";
import ErrorPage from "../Global/ErrorPage";
import TitleParagraph from "../TitleParagraph";
import Maintenance from "../Global/Maintenance";
import TestimonialsTwo from "../TestimonialsTwo";
import FeaturesGridTwo from "../FeaturesGridTwo";
import TitleContentImage from "../TitleContentImage";
import JumboContentImage from "../JumboContentImage";
import TestimonialsSlider from "../TestimonialsSlider";
import JumboContentSection from "../JumboContentSection";
import FeaturesGrid from "../FeaturesGrid";
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
									buttonLinkTwo={item?.buttonLinkTwo}
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
								<FeaturesGrid
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
									cardThree={item?.cardThree}
									gridContent={item?.gridContent}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_FeaturesGridTwo` ? (
							<>
								<FeaturesGridTwo
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
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
						) : item?.fieldGroupName === `${FlexibleContent}_OurServices` ? (
							<>
								<OurServices
									title={item?.title}
									image={item?.image}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									servicesGrid={item?.servicesGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Testimonials` ? (
							<></>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TestimonialsSlider` ? (
							<>
								<TestimonialsSlider />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TestimonialsTwo` ? (
							<>
								<TestimonialsTwo
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Faq` ? (
							<>
								<FAQ
									title={item?.title}
									faqGrid={item?.faqGrid}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_FaqTwo` ? (
							<>
								<FAQTwo
									title={item?.title}
									image={item?.image}
									faqGrid={item?.faqGrid}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
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
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_CtaTwo` ? (
							<>
								<CTATwo
									title={item?.title}
									buttonLink={item?.buttonLink}
									highlightText={item?.highlightText}
									backgroundColor={item?.backgroundColor}
									highlightTextColor={item?.highlightTextColor}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_LinkedinCta` ? (
							<>
								<LinkedInCta
									title={item?.title}
									buttonLink={item?.buttonLink}
									highlightText={item?.highlightText}
									backgroundColor={item?.backgroundColor}
									highlightTextColor={item?.highlightTextColor}
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
