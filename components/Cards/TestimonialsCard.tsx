// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ITestimonialsCard} from "@/types/components";
import {initial, stagger} from "@/animations/animations";

// Components
import RenderStars from "../Elements/RenderStars";
import Paragraph from "@/components/Elements/Paragraph";

const TestimonialsCard: FC<ITestimonialsCard> = ({
	name,
	image,
	position,
	paragraph,
	starRating,
}) => {
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className="p-6 h-full min-h-[200px] w-full flex flex-col items-center lg:items-baseline gap-6 overflow-hidden mr-8"
			>
				<div className="flex items-center justify-center lg:justify-start gap-6 w-full">
					<div className="flex flex-col lg:flex-row items-center justify-center gap-6">
						<Image
							alt={`${image?.altText}`}
							src={`${
								image?.sourceUrl
									? image?.sourceUrl
									: "/img/logos/default-avatar-profile.jpg"
							}`}
							className={
								image?.sourceUrl
									? `object-cover object-center w-14 h-14 rounded-full`
									: `hidden`
							}
							width={
								image?.mediaDetails?.width ? image?.mediaDetails?.width : 500
							}
							height={
								image?.mediaDetails?.height ? image?.mediaDetails?.height : 500
							}
						/>
						<div className={image?.sourceUrl ? "ml-0 lg:ml-2" : "ml-0"}>
							<h3 className="block mb-3 text-base text-center lg:text-left text-black font-semibold leading-none">
								{name}
							</h3>
							<span className="block text-sm text-black text-center lg:text-left">
								{position}
							</span>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex items-center justify-center lg:justify-start mt-2"
							>
								<RenderStars starRating={starRating} />
							</motion.div>
						</div>
					</div>
				</div>

				<Paragraph
					content={paragraph}
					tailwindStyling="text-center lg:text-left text-black text-sm leading-relaxed"
				/>
			</motion.div>
		</>
	);
};

export default TestimonialsCard;
