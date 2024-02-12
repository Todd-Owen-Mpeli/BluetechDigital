// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurPartners} from "@/types/components/index";
import {fadeIn, initial, stagger, initialTwo} from "../animations/animations";

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
			<div className={styles.ourPartners + ` py-16 px-4 lg:px-0 bg-white`}>
				<div className="container px-0 mx-auto">
					<div className="flex flex-col items-center">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="text-center text-paragraph text-yellow-Two"
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 max-w-2xl mx-auto mb-6 text-center font-semibold leading-tight text-4xl lg:text-5xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-paragraph text-center"
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
							} lg:items-center lg:justify-between py-12`}
						>
							{imageGrid?.length > 0 ? (
								imageGrid.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<div>
											<Image
												alt={item?.image?.altText}
												src={item?.image?.sourceUrl}
												width={item?.image?.mediaDetails?.width}
												height={item?.image?.mediaDetails?.height}
												className={
													item?.image?.sourceUrl
														? `block w-[150px] mx-auto h-full sm:w-[150px] lg:w-full lg:h-[125px] object-contain object-center`
														: `hidden`
												}
											/>
										</div>
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
