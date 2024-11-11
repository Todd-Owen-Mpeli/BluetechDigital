// Imports
import fadeInUp, {
	initial,
	stagger,
	slideInLeftInitial,
	slideInRightFinish,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFeaturesGridTwo} from "@/types/components";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import FeaturesGridCard from "./Cards/FeaturesGridCard";
import FeaturesGridImageCard from "./Cards/FeaturesGridImageCard";

const FeaturesGridTwo: FC<IFeaturesGridTwo> = ({
	cardOne,
	cardTwo,
	lastCard,
	gridContent,
}) => {
	return (
		<div className="overflow-hidden bg-white lg:px-4">
			<div className="lg:container px-4 mx-auto">
				<div className="mx-auto max-w-7xl py-10">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-wrap -m-3"
					>
						{/* Card One */}
						<motion.div
							viewport={{once: true}}
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							className="w-full p-3 md:w-1/2"
						>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="h-full p-10 rounded-sm bg-lightGrey"
							>
								<div className="flex flex-wrap items-center justify-center lg:justify-start">
									<motion.h4
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="mb-2 text-center lg:text-center text-base text-yellow-two"
									>
										{cardOne?.subtitle}
									</motion.h4>
								</div>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-3 text-xl lg:text-3xl font-semibold text-center lg:text-left"
								>
									{cardOne?.title}
								</motion.h2>
								<Paragraph
									content={cardOne?.paragraph}
									className="text-black text-center lg:text-left text-paragraph"
								/>
							</motion.div>
						</motion.div>
						{/* Card Two */}
						<FeaturesGridImageCard backgroundImage={cardTwo?.backgroundImage} />
						{/* Remaining Cards */}
						{gridContent?.length > 0 ? (
							gridContent?.map((item: any, index: number) => (
								<Fragment key={index}>
									<FeaturesGridCard
										key={index}
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
						<FeaturesGridImageCard
							backgroundImage={lastCard?.backgroundImage}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesGridTwo;
