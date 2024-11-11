"use client";

// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ICaseStudies} from "@/types/components";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import Pagination from "@/components/Elements/Pagination";

const CaseStudiesGrid: FC<ICaseStudies.IProps> = ({
	title,
	subtitle,
	paragraph,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-12 px-4 bg-white">
				<div className="lg:container px-0 mx-auto flex flex-col items-center gap-6 lg:gap-16">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
					>
						<div>
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="max-w-sm mx-auto lg:mx-0 text-center lg:text-left text-base text-blue-default"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 uppercase text-black text-center lg:text-left font-semibold text-lg lg:text-xl"
							>
								{title}
							</motion.h3>
						</div>
						<Paragraph
							content={paragraph}
							className="max-w-full lg:max-w-xl text-black text-base text-center lg:text-left"
						/>
					</motion.div>
					<Pagination
						contentType="CaseStudiesCard"
						numberOfItemsRenderedPerPage={12}
						contentArray={globalContext?.caseStudies}
						className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-6 px-0 sm:px-4 lg:-m-4 gap-44 md:gap-16 lg:gap-6`}
					/>
				</div>
			</div>
		</>
	);
};

export default CaseStudiesGrid;
