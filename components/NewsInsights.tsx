"use client";

// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {INewsInsights} from "@/types/components";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import Pagination from "@/components/Elements/Pagination";

const NewsInsights: FC<INewsInsights> = ({title, italic, paragraph}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-10 pb-16 bg-white lg:container px-4 mx-auto">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="max-w-2xl mx-auto mb-20 text-center lg:max-w-5xl"
				>
					<motion.h2
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="my-2 max-w-xl mx-auto text-black text-center font-bold text-lg lg:text-3xl"
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
						className="max-w-3xl mx-auto text-black text-paragraph"
					/>
				</motion.div>
				<Pagination
					contentType="NewsInsightsCard"
					numberOfItemsRenderedPerPage={12}
					contentArray={globalContext?.newsInsights}
					className={`grid mb-32 px-4 lg:-m-4 gap-y-12 sm:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3`}
				/>
			</div>
		</>
	);
};

export default NewsInsights;
