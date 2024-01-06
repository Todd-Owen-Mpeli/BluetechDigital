// Imports
import {FC, Fragment} from "react";
import {IJumboContentSection} from "@/types/components";

// Components
import JumboContentSectionCard from "./Cards/JumboContentSectionCard";

const JumboContentSection: FC<IJumboContentSection> = ({
	jumboContentSection,
}) => {
	return (
		<>
			<div>
				{jumboContentSection?.length > 0 ? (
					jumboContentSection?.map((item: any, keys: any) => (
						<Fragment key={keys}>
							<JumboContentSectionCard
								title={item?.content?.title}
								image={item?.content?.image}
								subtitle={item?.content?.subtitle}
								paragraph={item?.content?.paragraph}
								buttonLink={item?.content?.buttonLink}
								imageLocation={item?.content?.imageLocation}
								backgroundDisplay={item?.content?.backgroundDisplay}
							/>
						</Fragment>
					))
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default JumboContentSection;
