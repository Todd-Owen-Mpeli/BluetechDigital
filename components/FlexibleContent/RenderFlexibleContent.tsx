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
import ContactForm from "../ContactForm";
import FeaturesGrid from "../FeaturesGrid";
import NewsInsights from "../NewsInsights";
import ServicesGrid from "../ServicesGrid";
import ErrorPage from "../Global/ErrorPage";
import BenefitsStats from "../BenefitsStats";
import TitleParagraph from "../TitleParagraph";
import Maintenance from "../Global/Maintenance";
import TestimonialsTwo from "../TestimonialsTwo";
import FeaturesGridTwo from "../FeaturesGridTwo";
import TestimonialsGrid from "../TestimonialsGrid";
import TitleContentImage from "../TitleContentImage";
import JumboContentImage from "../JumboContentImage";
import TestimonialsSlider from "../TestimonialsSlider";
import JumboContentSection from "../JumboContentSection";
import AchievementsStatsCTA from "../AchievementsStatsCTA";
import TwoColumnButtonContent from "../TwoColumnButtonContent";
import NewsInsightsThreeCards from "../NewsInsightsThreeCards";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent = content?.postTypeFlexibleContent;
	// BenefitsStats

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, keys: number) => (
					<section key={keys}>
						{item?.fieldGroupName === `${FlexibleContent}_Hero` &&
						item?.displaySection ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_HeroTwo` &&
						  item?.displaySection ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_FeaturesGrid` &&
						  item?.displaySection ? (
							<>
								<FeaturesGrid
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
									cardThree={item?.cardThree}
									gridContent={item?.gridContent}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_FeaturesGridTwo` &&
						  item?.displaySection ? (
							<>
								<FeaturesGridTwo
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
									gridContent={item?.gridContent}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_TwoColumnButtonContent` &&
						  item?.displaySection ? (
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
								`${FlexibleContent}_JumboContentSection` &&
						  item?.displaySection ? (
							<>
								<JumboContentSection
									jumboContentSection={item?.contentSection}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_JumboContentImage` &&
						  item?.displaySection ? (
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
								`${FlexibleContent}_AchievementsStatsCta` &&
						  item?.displaySection ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_TitleParagraph` &&
						  item?.displaySection ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
									displayParagraph={item?.displayParagraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurPartners` &&
						  item?.displaySection ? (
							<>
								<OurPartners
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									imageGrid={item?.imageGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_BenefitsStats` &&
						  item?.displaySection ? (
							<>
								<BenefitsStats
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									benefitsGrid={item?.benefitsGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurServices` &&
						  item?.displaySection ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_ServicesGrid` &&
						  item?.displaySection ? (
							<>
								<ServicesGrid servicesGrid={item?.servicesGrid} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Testimonials` &&
						  item?.displaySection ? (
							<>
								<TestimonialsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_TestimonialsSlider` &&
						  item?.displaySection ? (
							<>
								<TestimonialsSlider />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TestimonialsTwo` &&
						  item?.displaySection ? (
							<>
								<TestimonialsTwo
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Faq` &&
						  item?.displaySection ? (
							<>
								<FAQ
									title={item?.title}
									faqGrid={item?.faqGrid}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_FaqTwo` &&
						  item?.displaySection ? (
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
								`${FlexibleContent}_TitleContentImage` &&
						  item?.displaySection ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_VideoBlock` &&
						  item?.displaySection ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_Gallery` &&
						  item?.displaySection ? (
							<>
								<Gallery
									title={item?.title}
									gallery={item?.gallery}
									paragraph={item?.paragraph}
									highlightText={item?.highlightText}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_NewsInsightsGrid` &&
						  item?.displaySection ? (
							<>
								<NewsInsights
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_NewsInsightsThreeCards` &&
						  item?.displaySection ? (
							<>
								<NewsInsightsThreeCards
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Cta` &&
						  item?.displaySection ? (
							<>
								<CTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_CtaTwo` &&
						  item?.displaySection ? (
							<>
								<CTATwo
									title={item?.title}
									buttonLink={item?.buttonLink}
									highlightText={item?.highlightText}
									backgroundColor={item?.backgroundColor}
									highlightTextColor={item?.highlightTextColor}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_LinkedinCta` &&
						  item?.displaySection ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_ContactInfo` &&
						  item?.displaySection ? (
							<>
								<ContactInfo title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactForm` &&
						  item?.displaySection ? (
							<>
								<ContactForm
									title={item?.title}
									paragraph={item?.paragraph}
									formTitle={item?.formTitle}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Maintenance` &&
						  item?.displaySection ? (
							<>
								<Maintenance
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_ErrorPageContent` &&
						  item?.displaySection ? (
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
