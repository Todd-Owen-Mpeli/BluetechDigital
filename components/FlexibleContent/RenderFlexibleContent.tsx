"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import CTATwo from "@/components/CTATwo";
import FAQTwo from "@/components/FAQTwo";
import HeroTwo from "@/components/HeroTwo";
import Gallery from "@/components/Gallery";
import VideoBlock from "@/components/VideoBlock";
import LinkedInCta from "@/components/LinkedInCta";
import ContactInfo from "@/components/ContactInfo";
import OurPartners from "@/components/OurPartners";
import OurServices from "@/components/OurServices";
import ContactForm from "@/components/ContactForm";
import FeaturesGrid from "@/components/FeaturesGrid";
import NewsInsights from "@/components/NewsInsights";
import ServicesGrid from "@/components/ServicesGrid";
import BenefitsStats from "@/components/BenefitsStats";
import TitleParagraph from "@/components/TitleParagraph";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import TestimonialsTwo from "@/components/TestimonialsTwo";
import FeaturesGridTwo from "@/components/FeaturesGridTwo";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import TitleContentImage from "@/components/TitleContentImage";
import JumboContentImage from "@/components/JumboContentImage";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import JumboContentSection from "@/components/JumboContentSection";
import AchievementsStatsCTA from "@/components/AchievementsStatsCTA";
import TwoColumnButtonContent from "@/components/TwoColumnButtonContent";
import NewsInsightsThreeCards from "@/components/NewsInsightsThreeCards";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: any = content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMap: any = {
		[`${FlexibleContent}_Cta`]: CTA,
		[`${FlexibleContent}_Faq`]: FAQ,
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_FAQTwo`]: FAQTwo,
		[`${FlexibleContent}_CtaTwo`]: CTATwo,
		[`${FlexibleContent}_Gallery`]: Gallery,
		[`${FlexibleContent}_HeroTwo`]: HeroTwo,
		[`${FlexibleContent}_VideoBlock`]: VideoBlock,
		[`${FlexibleContent}_LinkedInCta`]: LinkedInCta,
		[`${FlexibleContent}_ContactInfo`]: ContactInfo,
		[`${FlexibleContent}_OurPartners`]: OurPartners,
		[`${FlexibleContent}_OurServices`]: OurServices,
		[`${FlexibleContent}_ContactForm`]: ContactForm,
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
			{content?.content?.length > 0 &&
				content?.content?.map((item: any, index: number) => (
					<section
						key={index}
						className={item?.displaySection ? "block" : "hidden"}
					>
						{componentMap[item?.fieldGroupName] && (
							<Fragment>
								{React.createElement(componentMap[item?.fieldGroupName], {
									...item,
								})}
							</Fragment>
						)}
					</section>
				))}
		</>
	);
};

export default RenderFlexibleContent;
