// Imports
import React, {FC, Fragment} from "react";
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
import CaseStudiesGrid from "../CaseStudiesGrid";
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

	// Components Key Value Pairs
	const componentMapping: any = {
		[`${FlexibleContent}_Cta`]: CTA,
		[`${FlexibleContent}_Faq`]: FAQ,
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_FAQTwo`]: FAQTwo,
		[`${FlexibleContent}_CtaTwo`]: CTATwo,
		[`${FlexibleContent}_Gallery`]: Gallery,
		[`${FlexibleContent}_HeroTwo`]: HeroTwo,
		[`${FlexibleContent}_ErrorPage`]: ErrorPage,
		[`${FlexibleContent}_VideoBlock`]: VideoBlock,
		[`${FlexibleContent}_LinkedInCta`]: LinkedInCta,
		[`${FlexibleContent}_ContactInfo`]: ContactInfo,
		[`${FlexibleContent}_OurPartners`]: OurPartners,
		[`${FlexibleContent}_OurServices`]: OurServices,
		[`${FlexibleContent}_ContactForm`]: ContactForm,
		[`${FlexibleContent}_Maintenance`]: Maintenance,
		[`${FlexibleContent}_FeaturesGrid`]: FeaturesGrid,
		[`${FlexibleContent}_NewsInsights`]: NewsInsights,
		[`${FlexibleContent}_ServicesGrid`]: ServicesGrid,
		[`${FlexibleContent}_BenefitsStats`]: BenefitsStats,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_CaseStudiesGrid`]: CaseStudiesGrid,
		[`${FlexibleContent}_TestimonialsTwo`]: TestimonialsTwo,
		[`${FlexibleContent}_FeaturesGridTwo`]: FeaturesGridTwo,
		[`${FlexibleContent}_TestimonialsGrid`]: TestimonialsGrid,
		[`${FlexibleContent}_TitleContentImage`]: TitleContentImage,
		[`${FlexibleContent}_JumboContentImage`]: JumboContentImage,
		[`${FlexibleContent}_TestimonialsSlider`]: TestimonialsSlider,
		[`${FlexibleContent}_JumboContentSection`]: JumboContentSection,
		[`${FlexibleContent}_AchievementsStatsCTA`]: AchievementsStatsCTA,
		[`${FlexibleContent}_TwoColumnButtonContent`]: TwoColumnButtonContent,
		[`${FlexibleContent}_NewsInsightsThreeCards`]: NewsInsightsThreeCards,
	};

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, index: number) => (
					<section
						key={index}
						className={item?.displaySection ? "block" : "hidden"}
					>
						{componentMapping[item?.fieldGroupName] && (
							<Fragment>
								{React.createElement(componentMapping[item?.fieldGroupName], {
									...item,
								})}
							</Fragment>
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
