"use client";

// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsGrid} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Testimonials.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import Pagination from "@/components/Elements/Pagination";

const TestimonialsGrid: FC<ITestimonialsGrid> = ({
	title,
	subtitle,
	paragraph,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					styles.testimonials +
					` relative py-10 px-4 bg-white bg-cover bg-no-repeat bg-center`
				}
				style={{
					backgroundImage: `url("/svg/background/layeblue-peaks-haikei-white-lightgrey.svg")`,
				}}
			>
				<div className="lg:container relative m-auto flex flex-col items-center">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col items-center"
					>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-center text-base text-yellow-two"
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-2 max-w-xl mx-auto xl:mx-0 text-black text-center font-bold text-xl lg:text-3xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							className="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-base lg:text-paragraph text-center"
						/>
					</motion.div>
					<Pagination
						contentType="TestimonialsCard"
						numberOfItemsRenderedPerPage={12}
						contentArray={globalContext?.testimonials}
						className={`grid px-4 lg:px-16 lg:-m-4 mt-12 lg:mt-12 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}
					/>
				</div>
			</div>
		</>
	);
};

export default TestimonialsGrid;
