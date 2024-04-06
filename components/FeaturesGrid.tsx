// Imports
import {
	stagger,
	initial,
	fadeInUp,
	fadeInTwo,
	initialTwo,
	slideInRightFinish,
	slideInLeftInitial,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFeaturesGrid} from "@/types/components";

// Components
import Paragraph from "./Elements/Paragraph";
import FeaturesGridCard from "./Cards/FeaturesGridCard";
import FeaturesGridImageCard from "./Cards/FeaturesGridImageCard";

const FeaturesGrid: FC<IFeaturesGrid> = ({
	cardOne,
	cardTwo,
	lastCard,
	cardThree,
	gridContent,
}) => {
	return (
		<div className="overflow-hidden bg-white lg:px-4">
			<div className="lg:lg:container px-4 mx-auto py-10">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="relative z-50 flex flex-wrap -m-3"
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
								tailwindStyling="text-black text-center lg:text-left text-paragraph"
							/>
						</motion.div>
					</motion.div>
					{/* Card Two */}
					<FeaturesGridImageCard backgroundImage={cardTwo?.backgroundImage} />
					{/* Card Three */}
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className="w-full p-3 md:w-1/2"
					>
						<div
							className="h-full px-8 py-8 bg-center bg-no-repeat bg-cover rounded-sm lg:p-16 bg-darkBlue"
							style={{
								backgroundImage: `url("/svg/background/stacked-waves-haikei-orange-yellow.svg")`,
							}}
						>
							<div className="flex flex-wrap items-center justify-center h-full">
								<motion.div
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="w-full group"
								>
									<div className="relative z-10 transition duration-500 ease-in-out transform group-hover:-translate-y-6 group-hover:-translate-x-6 pr-7">
										<motion.div
											initial={initial}
											variants={stagger}
											whileInView="animate"
											viewport={{once: true}}
											className="relative z-10 p-5 text-center bg-white rounded-10 shadow-3xl"
										>
											<motion.h2
												initial={initialTwo}
												whileInView={fadeInTwo}
												viewport={{once: true}}
												className="mb-3 text-3xl font-bold text-black"
											>
												{cardThree?.foreground?.subtitle}
											</motion.h2>
											<motion.h4
												initial={initialTwo}
												whileInView={fadeInTwo}
												viewport={{once: true}}
												className="mb-3 text-paragraph font-bold text-black"
											>
												{cardThree?.foreground?.title}
											</motion.h4>
											<Paragraph
												content={cardThree?.foreground?.paragraph}
												tailwindStyling="text-base text-black"
											/>
										</motion.div>
									</div>
									<div className="mt-2 transition-all duration-500 ease-in-out transform group-hover:translate-y-6 group-hover:translate-x-6 pl-7">
										<motion.div
											initial={initial}
											variants={stagger}
											whileInView="animate"
											viewport={{once: true}}
											className="p-5 text-center bg-white opacity-30 rounded-10 shadow-3xl"
										>
											<motion.h2
												initial={initialTwo}
												whileInView={fadeInTwo}
												viewport={{once: true}}
												className="mb-3 text-3xl font-bold text-black"
											>
												{cardThree?.background?.subtitle}
											</motion.h2>
											<motion.h4
												initial={initialTwo}
												whileInView={fadeInTwo}
												viewport={{once: true}}
												className="mb-3 text-paragraph font-bold text-black"
											>
												{cardThree?.background?.title}
											</motion.h4>
											<Paragraph
												content={cardThree?.background?.paragraph}
												tailwindStyling="text-base text-black"
											/>
										</motion.div>
									</div>
								</motion.div>
							</div>
						</div>
					</motion.div>
					{/* Remaining Cards */}
					{gridContent?.length > 0 ? (
						gridContent?.map((item: any, keys: number) => (
							<Fragment key={keys}>
								<FeaturesGridCard
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
					<FeaturesGridImageCard backgroundImage={lastCard?.backgroundImage} />
				</motion.div>
			</div>
		</div>
	);
};

export default FeaturesGrid;
