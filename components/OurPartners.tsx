// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurPartners} from "@/types/components/index";

// Styling
import styles from "../styles/components/OurPartners.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const OurPartners: FC<IOurPartners> = ({
	title,
	subtitle,
	paragraph,
	imageGrid,
}) => {
	return (
		<>
			<div className={styles.ourPartners + ` py-10 px-4 lg:px-0 bg-white`}>
				<div className="container px-0 mx-auto">
					<div className="flex flex-col items-center">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="text-center text-tiny lg:text-base text-yellow-two"
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 max-w-xl mx-auto xl:mx-0 text-black text-center font-bold text-lg lg:text-3xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-base lg:text-paragraph text-center"
						/>
					</div>
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={`grid items-center justify-center grid-cols-2 gap-4 ${
								imageGrid?.length <= 4 ? "lg:grid-cols-4" : "lg:grid-cols-6"
							} lg:items-center lg:justify-between pt-12`}
						>
							{imageGrid?.length > 0 ? (
								imageGrid.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<motion.div
											custom={keys}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<Image
												alt={item?.image?.altText}
												src={item?.image?.sourceUrl}
												width={item?.image?.mediaDetails?.width}
												height={item?.image?.mediaDetails?.height}
												className={
													item?.image?.sourceUrl
														? `block w-[150px] mx-auto h-full sm:w-[150px] lg:w-full lg:h-[100px] object-contain object-center`
														: `hidden`
												}
											/>
										</motion.div>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurPartners;
