// Imports
import {
	stagger,
	initial,
	fadeInUp,
	fadeInTwo,
	initialTwo,
	slideInRightFinish,
	slideInLeftInitial,
	slideInRightInitial,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFeaturesGridContent} from "@/types/components";

// Components
import Paragraph from "./Elements/Paragraph";
import FeaturesGridContentCard from "./Cards/FeaturesGridContentCard";

const FeaturesGridContent: FC<IFeaturesGridContent> = ({
	cardOne,
	cardTwo,
	lastCard,
	cardThree,
	gridContent,
}) => {
	return (
		<div className="overflow-hidden bg-white lg:px-4">
			<div className="container px-4 mx-auto pt-28 pb-36">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="relative z-50 flex flex-wrap -m-3"
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
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
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
					</motion.div>
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
									whileInView={stagger}
									viewport={{once: true}}
									className="w-full group"
								>
									<div className="relative z-10 transition duration-500 ease-in-out transform group-hover:-translate-y-6 group-hover:-translate-x-6 pr-7">
										<motion.div
											initial={initial}
											whileInView={stagger}
											viewport={{once: true}}
											className="relative z-10 p-5 text-center bg-white rounded-10 shadow-3xl"
										>
											<motion.h4
												initial={initialTwo}
												whileInView={fadeInTwo}
												viewport={{once: true}}
												className="mb-3 text-3xl font-bold text-pureBlack"
											>
												{cardThree?.foreground?.subtitle}
											</motion.h4>
											<motion.h4
												initial={initialTwo}
												whileInView={fadeInTwo}
												viewport={{once: true}}
												className="mb-3 text-paragraph font-bold text-pureBlack"
											>
												{cardThree?.foreground?.title}
											</motion.h4>
											<Paragraph
												content={cardThree?.foreground?.paragraph}
												tailwindStyling="text-base text-pureBlack"
											/>
										</motion.div>
									</div>
									<div className="mt-2 transition-all duration-500 ease-in-out transform group-hover:translate-y-6 group-hover:translate-x-6 pl-7">
										<motion.div
											initial={initial}
											whileInView={stagger}
											viewport={{once: true}}
											className="p-5 text-center bg-white opacity-30 rounded-10 shadow-3xl"
										>
											<motion.h4
												initial={initialTwo}
												whileInView={fadeInTwo}
												viewport={{once: true}}
												className="mb-3 text-3xl font-bold text-pureBlack"
											>
												{cardThree?.background?.subtitle}
											</motion.h4>
											<motion.h4
												initial={initialTwo}
												whileInView={fadeInTwo}
												viewport={{once: true}}
												className="mb-3 text-paragraph font-bold text-pureBlack"
											>
												{cardThree?.background?.title}
											</motion.h4>
											<Paragraph
												content={cardThree?.background?.paragraph}
												tailwindStyling="text-base text-pureBlack"
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
								<FeaturesGridContentCard
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
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
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
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default FeaturesGridContent;
