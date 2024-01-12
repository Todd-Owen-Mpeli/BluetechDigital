// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFeaturesGridTwo} from "@/types/components";
import fadeInUp, {initial, stagger} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import FeaturesGridContentCard from "./Cards/FeaturesGridContentCard";

const FeaturesGridTwo: FC<IFeaturesGridTwo> = ({
	cardOne,
	cardTwo,
	lastCard,
	gridContent,
}) => {
	return (
		<div className="overflow-hidden bg-white lg:px-4">
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-7xl pt-28 pb-36">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-wrap -m-3"
					>
						{/* Card One */}
						<div className="w-full p-3 md:w-1/2">
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="h-full p-10 rounded-sm bg-lightGrey"
							>
								<div className="flex flex-wrap items-center justify-center lg:justify-start">
									<div className="w-auto p-2">
										<motion.h4
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="mb-2 text-center lg:text-center text-paragraph text-yellow-Two"
										>
											{cardOne?.subtitle}
										</motion.h4>
									</div>
								</div>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-3 text-3xl font-semibold text-center lg:text-left"
								>
									{cardOne?.title}
								</motion.h3>
								<Paragraph
									content={cardOne?.paragraph}
									tailwindStyling="text-pureBlack text-center lg:text-left text-paragraph"
								/>
							</motion.div>
						</div>
						{/* Card Two */}
						<div
							className={
								cardTwo?.backgroundImage?.sourceUrl
									? `w-full p-3 md:w-1/2 min-h-[450px]`
									: `hidden`
							}
						>
							<div
								className="h-full p-8 bg-center bg-no-repeat bg-cover rounded-sm bg-lightGrey"
								style={{
									clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
									backgroundImage: `url("${cardTwo?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</div>
						{/* Remaining Cards */}
						{gridContent?.length > 0 ? (
							gridContent?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<FeaturesGridContentCard
										key={keys}
										title={item?.card?.title}
										subtitle={item?.card?.subtitle}
										paragraph={item?.card?.paragraph}
										backgroundColor={item?.card?.backgroundColor}
									/>
								</Fragment>
							))
						) : (
							<></>
						)}
						{/* Last Card */}
						<div
							className={
								lastCard?.backgroundImage?.sourceUrl
									? `w-full p-3 md:w-1/2 min-h-[450px]`
									: `hidden`
							}
						>
							<div
								className="h-full p-8 bg-center bg-no-repeat bg-cover rounded-sm bg-lightGrey"
								style={{
									clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
									backgroundImage: `url("${lastCard?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesGridTwo;
