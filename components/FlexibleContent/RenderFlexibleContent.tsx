// Imports
import {FC} from "react";
import {usePageContext} from "@/context/pages";

// Components
import DynamicComponent from "./DynamicComponent";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent = content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMapping: any = {
		[`${FlexibleContent}_Cta`]: "CTA",
		[`${FlexibleContent}_Hero`]: "Hero",
		[`${FlexibleContent}_CtaTwo`]: "CTATwo",
		[`${FlexibleContent}_Gallery`]: "Gallery",
		[`${FlexibleContent}_HeroTwo`]: "HeroTwo",
		[`${FlexibleContent}_VideoBlock`]: "VideoBlock",
		[`${FlexibleContent}_LinkedInCta`]: "LinkedInCta",
		[`${FlexibleContent}_ContactInfo`]: "ContactInfo",
		[`${FlexibleContent}_OurPartners`]: "OurPartners",
		[`${FlexibleContent}_OurServices`]: "OurServices",
		[`${FlexibleContent}_ContactForm`]: "ContactForm",
		[`${FlexibleContent}_FeaturesGrid`]: "FeaturesGrid",
		[`${FlexibleContent}_NewsInsights`]: "NewsInsights",
		[`${FlexibleContent}_ServicesGrid`]: "ServicesGrid",
		[`${FlexibleContent}_ErrorPage`]: "Global/ErrorPage",
		[`${FlexibleContent}_BenefitsStats`]: "BenefitsStats",
		[`${FlexibleContent}_TitleParagraph`]: "TitleParagraph",
		[`${FlexibleContent}_Maintenance`]: "Global/Maintenance",
		[`${FlexibleContent}_CaseStudiesGrid`]: "CaseStudiesGrid",
		[`${FlexibleContent}_TestimonialsTwo`]: "TestimonialsTwo",
		[`${FlexibleContent}_FeaturesGridTwo`]: "FeaturesGridTwo",
		[`${FlexibleContent}_TestimonialsGrid`]: "TestimonialsGrid",
		[`${FlexibleContent}_TitleContentImage`]: "TitleContentImage",
		[`${FlexibleContent}_JumboContentImage`]: "JumboContentImage",
		[`${FlexibleContent}_TestimonialsSlider`]: "TestimonialsSlider",
		[`${FlexibleContent}_JumboContentSection`]: "JumboContentSection",
		[`${FlexibleContent}_AchievementsStatsCTA`]: "AchievementsStatsCTA",
		[`${FlexibleContent}_TwoColumnButtonContent`]: "TwoColumnButtonContent",
		[`${FlexibleContent}_NewsInsightsThreeCards`]: "NewsInsightsThreeCards",
	};

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, keys: number) => (
					<section key={keys}>
						{item?.fieldGroupName &&
						componentMapping[item.fieldGroupName] &&
						item?.displaySection ? (
							<>
								<DynamicComponent
									componentName={componentMapping[item?.fieldGroupName]}
									{...item}
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
