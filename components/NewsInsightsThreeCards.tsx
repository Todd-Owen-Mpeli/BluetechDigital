// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {INewsInsights} from "@/types/components";

// Components
import Paragraph from "./Elements/Paragraph";
import NewsInsightsCard from "./Cards/NewsInsightsCard";

const newsInsightsThreeCards: FC<INewsInsights> = ({
	title,
	italic,
	paragraph,
}) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-10 bg-white container px-4 mx-auto">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={
						title && italic
							? "max-w-2xl mx-auto mb-24 text-center flex flex-col items-center lg:max-w-5xl"
							: "hidden"
					}
				>
					<motion.h2
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="my-2 max-w-xl mx-auto xl:mx-0 text-black text-center font-bold text-xl lg:text-3xl"
					>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
						>
							{title}
						</motion.span>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="ml-4 font-serif font-normal italic"
						>
							{italic}
						</motion.span>
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-3xl mx-auto text-black text-paragraph"
					/>
				</motion.div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="grid px-4 lg:-m-4 gap-y-12 sm:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{globalContext?.newsInsightsThreeCards?.length > 0 ? (
						globalContext?.newsInsightsThreeCards?.map(
							(item: any, keys: any) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="w-full"
									>
										<NewsInsightsCard
											uri={item?.node?.uri}
											title={item?.node?.title}
											paragraph={item?.node?.excerpt}
											featuredImage={item?.node?.featuredImage}
										/>
									</motion.div>
								</Fragment>
							)
						)
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default newsInsightsThreeCards;
